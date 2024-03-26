"use client";

import { ebGaramond, viaodaLibre } from "@/app/general/layout";
import { WishesResponse, WishesStoreResponse } from "@/interface/wishes";
import { cn } from "@/lib/utils";
import API from "@/services/API";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import Image from "next/image";
import { useMemo, useRef } from "react";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";
import { Button } from "../../atoms/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../atoms/dialog";
import { Label } from "../../atoms/label";
import { Input } from "../../atoms/input";
import { Textarea } from "../../atoms/textarea";
import { wishesSchema } from "@/yupSchemas/wishes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

dayjs.extend(duration);
dayjs.extend(relativeTime);

type WishPayload = yup.InferType<typeof wishesSchema>;

export const Wishes = () => {
  const { t } = useTranslation(["general"]);

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
      const response = await API.get<WishesResponse>(`/api/wishes?page=${pageParam}&limit=20`);

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
    <div className="w-full h-full flex flex-col p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem]">
      <div className="bg-gold-200 h-full flex flex-col rounded-md shadow-sm">
        <div className="relative w-full h-6">
          <Image
            src="/images/theme/general/home-top-ulos.jpg"
            fill
            alt="Ulos"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
        <div className="px-5 py-8 lg:py-10 flex flex-col flex-1 relative overflow-y-hidden">
          <h2 className={cn(viaodaLibre.className, "text-4xl text-center mb-4")}>{t("general:wishes.wishes")}</h2>
          <div className="overflow-y-auto space-y-4 flex-1">
            {isFetching && <div className="text-center text-sm text-slate-700">Loading...</div>}
            {flattenData.map((wish, index) => (
              <div key={index}>
                <div className={cn(ebGaramond.className, "text-medium font-semibold text-maroon-700")}>{wish.name}</div>
                <div className={cn(ebGaramond.className, "text-base font-medium mb-1 text-slate-700")}>{wish.wish}</div>
                <div className="text-xs text-slate-600">
                  {dayjs(wish.created_at).locale("id").format("ddd, DD MMM YYYY HH:mm")}
                </div>
              </div>
            ))}
            {!hasNextPage && (
              <div className="text-center text-sm text-slate-700">{t("general:wishes.noMoreWishes")}</div>
            )}
            <Button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage}
              size="xs"
              variant="outline"
              className="bg-transparent border-maroon-700 text-maroon-700 hover:bg-transparent"
            >
              {t("general:wishes.loadMore")}
            </Button>
          </div>
          <div className="pt-8">
            <Dialog>
              <DialogTrigger className="w-full">
                <Button onClick={() => refetch()} className="w-full bg-maroon-600 hover:bg-maroon-700 duration-100">
                  {t("general:wishes.sayWishes")}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-5">Say Wishes</DialogTitle>
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
                      <Button type="submit" className="bg-maroon-600 hover:bg-maroon-700 duration-100">
                        Save
                      </Button>
                    </div>
                  </form>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="relative w-full h-6">
          <Image
            src="/images/theme/general/home-top-ulos.jpg"
            fill
            alt="Ulos"
            objectFit="cover"
            className="rounded-b-md"
          />
        </div>
      </div>
    </div>
  );
};
