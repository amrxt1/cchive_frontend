import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

export const useFeedListings = () => {
  return useQuery({
    queryKey: ["feedListings"],
    queryFn: async () => {
      const { data } = await api.get("/feed_listings");
      return data;
    },
  });
};
