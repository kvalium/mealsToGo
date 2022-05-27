import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "react-query";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <RestaurantsScreen />
        <ExpoStatusBar />
      </PaperProvider>
    </QueryClientProvider>
  );
}

export default App;
