import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Notifications } from "@/components/ui/notifications";
import { Spinner } from "@/components/ui/spinner";
import { queryConfig } from "@/lib/react-query";
import { FirebaseProvider } from "./firebase";

const ErrorFallback = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(() => {
    return new QueryClient({ defaultOptions: queryConfig });
  });

  return (
    <React.Suspense
      fallback={
        <div className="flex justify-center items-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <FirebaseProvider>
            <QueryClientProvider client={queryClient}>
              {import.meta.env.DEV && <ReactQueryDevtools />}
              <Notifications />
              <Router>{children}</Router>
            </QueryClientProvider>
          </FirebaseProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
