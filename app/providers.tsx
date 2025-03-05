"use client";
import fetcher from "@/app/services/fetcher";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        //  refreshInterval: 3000, //* queries will be refetched every 3 seconds
        // revalidateIfStale: false, //* if the data is stale, it will not be refetched
        // revalidateOnFocus: false, //* if the window is focused, it will not be refetched
        // revalidateOnReconnect: false, //* if the network is reconnected, it will not be refetched
      }}
    >
      {children}
    </SWRConfig>
  );
};
