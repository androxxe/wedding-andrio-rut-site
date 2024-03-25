import { Input } from "../atoms/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "../atoms/label";
import { Textarea } from "../atoms/textarea";
import { Button } from "../atoms/button";
import { MdxCodeWishes, MdxWishes } from "../mdx";
import { CodingPreview } from "../organism";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../atoms/dialog";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { useMemo, useRef } from "react";
import { wishesSchema } from "@/yupSchemas/wishes";
import { WishesResponse, WishesStoreResponse } from "@/interface/wishes";
import API from "@/services/API";

type WishPayload = yup.InferType<typeof wishesSchema>;

export const Wishes = () => {
  const form = useForm<WishPayload>({
    defaultValues: {
      name: "",
      wish: ""
    },
    resolver: yupResolver(wishesSchema)
  });

  const dialogRef = useRef<HTMLButtonElement>(null);

  const onSubmit = (data: WishPayload) => mutateAsync(data);

  const { mutateAsync } = useMutation({
    mutationKey: ["wishes"],
    mutationFn: async (payload: WishPayload) =>
      await API.post<WishesStoreResponse, WishPayload>(`/api/wishes`, payload),
    onSuccess: () => {
      form.reset();
      refetch();
      dialogRef?.current?.click();
    },
    onError: (error) => {
      alert(error.message);
    }
  });

  const { data, refetch, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<WishesResponse>({
    queryKey: ["wishes"],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await API.get<WishesResponse>(`/api/wishes?page=${pageParam}&limit=10`);

      if (response.statusCode !== 200) {
        throw new Error(response.message);
      }

      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.meta.page * lastPage.meta.limit < lastPage.meta.total ? lastPage.meta.page + 1 : undefined
  });

  const flattenData = useMemo(() => data?.pages.map((page) => page.data).flat() || [], [data]);

  return (
    <div className="space-y-5">
      <MdxWishes />
      <CodingPreview Mdx={MdxCodeWishes}>
        <div className="space-y-5 p-5">
          <div className="max-w-2xl space-y-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-slate-950">Say Wedding Wish</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-5">Wishes</DialogTitle>
                  <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input type="name" id="name" placeholder="Name" {...form.register("name")} />
                      {form.formState.errors?.name?.message && (
                        <span className="text-xs text-red-500">{form.formState.errors?.name?.message}</span>
                      )}
                    </div>
                    <div className="grid w-full gap-1.5">
                      <Label htmlFor="message">Wish</Label>
                      <Textarea placeholder="Type your wish here." {...form.register("wish")} />
                      {form.formState.errors?.name?.message && (
                        <span className="text-xs text-red-500">{form.formState.errors?.name?.message}</span>
                      )}
                    </div>
                    <div>
                      <DialogClose ref={dialogRef}></DialogClose>
                      <Button type="submit">Save</Button>
                    </div>
                  </form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="space-y-3 max-h-96 overflow-y-auto overflow-scroll bg-slate-950 p-5 rounded-lg">
              {isFetching && <div className="text-center text-sm text-slate-400">Loading...</div>}
              {flattenData.map((wish, index) => (
                <div key={index} className="flex flex-row justify-between gap-2">
                  <div>
                    <div className="text-base font-bold">{wish.name}</div>
                    <div className="text-base">{wish.wish}</div>
                  </div>
                  <div className="text-xs text-slate-400">{wish.created_at}</div>
                </div>
              ))}
              {!hasNextPage && <div className="text-center text-sm text-slate-400">No more wishes</div>}
              <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
                Load more
              </Button>
            </div>
          </div>
        </div>
      </CodingPreview>
    </div>
  );
};
