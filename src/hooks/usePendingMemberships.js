import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

export const useMyPendingMemberships = () => {
  return useQuery({
    queryKey: ["myPendingMemberships"],
    queryFn: async () => {
      const res = await api.get("/pending_approval");
      return res.data;
    },
  });
};
