import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Repositories from "./components/Repositories";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Repositories />
    </QueryClientProvider>
  );
};

export default App;
