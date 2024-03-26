"use client";

import { useI18n } from "@/hooks/useI18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

// eslint-disable-next-line react-hooks/rules-of-hooks
const { init } = useI18n();
init();

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
