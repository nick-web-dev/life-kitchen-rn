import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/navigation";
import { persistor, store } from "./src/redux/store";
import "react-native-gesture-handler";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
