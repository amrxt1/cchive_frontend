import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api";

export const useApproveMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ groupId, membershipId }) => {
      return api.patch(
        `/study_groups/${groupId}/memberships/${membershipId}/approve`
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myPendingMemberships"]);
    },
  });
};
