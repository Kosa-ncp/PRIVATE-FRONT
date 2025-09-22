import { AssetFormData } from "@/app/portfolio/(components)/AddAssetForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import addPortfolio from "../utils/addPortfolio";
import { addPortfolioResponseDataType } from "../utils/utilsTypes";

const useAddPortfolio = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, error } = useMutation<
    addPortfolioResponseDataType,
    Error,
    AssetFormData
  >({
    mutationFn: addPortfolio,

    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["portfolio"] }),
        queryClient.invalidateQueries({ queryKey: ["dashboard"] }),
      ]);
    },

    onError: (error) => {
      console.error("자산 생성 실패:", error);
    },
  });

  return { mutate, mutateAsync, isPending, error };
};

export default useAddPortfolio;
