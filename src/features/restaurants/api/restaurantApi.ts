import { useQuery } from "react-query";

export const useFetchRestaurants = () =>
  useQuery("restaurants", async () => {
    const response = await fetch("https://reactnative.dev/movies.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
