import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { MdxCodeWishes, MdxWishes } from "../mdx";
import { CodingPreview } from "../organism";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { useMemo, useRef } from "react";

const schema = yup.object().shape({
  name: yup.string().required(),
  wish: yup.string().required()
});

type WishPayload = yup.InferType<typeof schema>;

interface Wish {
  name: string;
  wish: string;
  created_at: string;
  updated_at: string;
}
interface WishesResponse {
  statusCode: number;
  data: Wish[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}

export const Wishes = () => {
  const form = useForm<WishPayload>({
    defaultValues: {
      name: "",
      wish: ""
    },
    resolver: yupResolver(schema)
  });

  const dialogRef = useRef<HTMLButtonElement>(null);

  const onSubmit = (data: WishPayload) => {
    mutateAsync(data);
  };

  const { mutateAsync } = useMutation({
    mutationKey: ["wishes"],
    mutationFn: async (payload: WishPayload) => {
      const response = await fetch(`/api/wishes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      return response.json() as unknown as Wish;
    },
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
      const response = await fetch(`/api/wishes?page=${pageParam}&limit=10`, {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      return response.json() as unknown as WishesResponse;
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
