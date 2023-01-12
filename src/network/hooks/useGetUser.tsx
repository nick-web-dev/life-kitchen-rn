import { useQuery } from "@tanstack/react-query";
import { reactQueryKeys } from "../../utils/Constants";
import { fetchById } from "../firebaseServices";

export const useGetUser = (uid: string) => {
  const { isLoading, data, refetch } = useQuery<any, Error>(
    [reactQueryKeys.product],
    async () => {
      return await fetchById(uid);
    }
  );

  return { isLoading, data, refetch };
};
