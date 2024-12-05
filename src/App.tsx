import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router/router";
import ModalContextProvider from "./contexts/ModalContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 5,
    },
  },
});

function App() {
  return (
    <PrimeReactProvider>
      <QueryClientProvider client={queryClient}>
        <ModalContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </ModalContextProvider>
      </QueryClientProvider>
    </PrimeReactProvider>
  );
}

export default App;
