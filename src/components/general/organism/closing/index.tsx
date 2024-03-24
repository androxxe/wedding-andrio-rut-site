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
import { wishesSchema } from "@/yupSchemas/wishes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

dayjs.extend(duration);
dayjs.extend(relativeTime);

type WishPayload = yup.InferType<typeof wishesSchema>;

export const Closing = () => {
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
    <div className="w-full h-full p-3 lg:p-12 bg-[url(/images/theme/general/main-pattern.jpg)] bg-[length:16rem_16rem] flex flex-col items-center justify-center">
      <h2 className={cn(viaodaLibre.className, "text-4xl text-center mb-4 text-gold-200 shadow-sm")}>Wedding Gift</h2>
      <div className="mb-6">
        <p className={cn(ebGaramond.className, "text-white text-center text-lg")}>
          Your presence at our wedding was truly an honor. Should you wish to share your blessings digitally, our
          account number is available for your convenience. Thank you sincerely!
        </p>
      </div>
      <div className={cn(ebGaramond.className, "text-lg text-white space-y-5")}>
        <div className="bg-gold-200 duration-100 hover:scale-105 px-10 py-4 text-maroon-700 rounded-md shadow flex flex-row items-center space-x-4">
          <Image
            src="/images/theme/general/bank_mandiri.webp"
            width={50}
            height={50}
            objectFit="contain"
            alt="Bank Mandiri"
          />
          <div>
            <span className="block text-xl font-medium">1080014605969</span>
            <span className="block font-normal">Andrio Pratama Sirait</span>
            <span className="block font-normal">Bank Mandiri</span>
          </div>
        </div>
        <div className="bg-gold-200 duration-100 hover:scale-105 px-10 py-4 text-maroon-700 rounded-md shadow flex flex-row items-center space-x-4">
          <Image src="/images/theme/general/bca.png" width={50} height={50} objectFit="contain" alt="BCA" />
          <div>
            <span className="block text-xl font-medium">7285253306</span>
            <span className="block font-normal">Rut Maya Sari Sihite</span>
            <span className="block font-normal">Bank Central Asia</span>
          </div>
        </div>
      </div>
    </div>
  );
};
