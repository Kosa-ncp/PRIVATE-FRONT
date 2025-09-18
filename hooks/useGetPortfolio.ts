import { useQuery } from "@tanstack/react-query";
import getPortfolioList from "../utils/getPortfolioList";
import { useAssetStore } from "../stores/asserStore";
import { useEffect } from "react";

const useGetPortfolio = () => {
  const { initializeAssets, isInitialized } = useAssetStore();
  const queryKey = ["portfolio"];
  const queryConfig = {
    refetchOnWindowFocus: false,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: getPortfolioList,
  });

  useEffect(() => {
    if (data && data.status === "success" && !isInitialized) {
      initializeAssets(data.data);
    }
  }, [data, isInitialized, initializeAssets]);

  return { data: data?.data || [], isLoading, error };
};

export { useGetPortfolio };
