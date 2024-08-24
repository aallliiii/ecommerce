"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ClientProvider({ children }) {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
