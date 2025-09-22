import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPortfolioResponseDataType } from "../utils/utilsTypes";
import editPortfolio from "../utils/editPortfolio";
import { AssetEditFormData } from "@/app/portfolio/(components)/EditAssetForm";

const useEditPortfolio = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, error } = useMutation<
    editPortfolioResponseDataType,
    Error,
    AssetEditFormData
  >({
    mutationFn: editPortfolio,

    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["portfolio"] }),
        queryClient.invalidateQueries({ queryKey: ["dashboard"] }),
      ]);
    },

    onError: (error) => {
      console.error("자산 수정 실패:", error);
    },
  });

  return { mutate, mutateAsync, isPending, error };
};

export default useEditPortfolio;
