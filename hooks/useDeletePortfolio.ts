import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePortfolioResponseDataType } from "../utils/utilsTypes";
import deletePortfolio from "../utils/deletePortfolio";

const useDeletePortfolio = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation<
    DeletePortfolioResponseDataType,
    Error,
    string
  >({
    mutationFn: deletePortfolio,

    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["portfolio"] }),
        queryClient.invalidateQueries({ queryKey: ["dashboard"] }),
      ]);
    },

    onError: (error) => {
      console.error("자산 삭제 실패:", error);
    },
  });

  return { mutate, isPending, error };
};

export default useDeletePortfolio;
