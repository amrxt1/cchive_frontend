import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

export const useFeedReviews = () => {
  return useQuery({
    queryKey: ["feedReviews"],
    queryFn: async () => {
      const { data } = await api.get("/feed_reviews");
      return data;
    },
  });
};
