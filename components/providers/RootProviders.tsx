"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function RootProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));

  // light/dark mode switcher is a little wonky, consider removing it completely
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default RootProviders;
