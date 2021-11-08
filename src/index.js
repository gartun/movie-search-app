import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ErrBoundary from "./components/ErrBoundary";
import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: Infinity,
      retry: 1,
    },
  },
});

ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ErrBoundary>
        <App />
      </ErrBoundary>
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
