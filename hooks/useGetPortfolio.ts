import { useQuery } from "@tanstack/react-query";
import getPortfolioList from "../utils/getPortfolioList";
import useAssetStore from "../stores/asserStore";
import { useEffect } from "react";

const useGetPortfolio = () => {
  const { setPortfolio } = useAssetStore();
  const queryKey = ["portfolio"];
  const queryConfig = {
    refetchOnWindowFocus: false,
    refetchOnMount: "always" as const,
  };

  const { data, isLoading, isRefetching, error, isFetching } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: getPortfolioList,
  });

  console.log(data);

  useEffect(() => {
    if (data && data.status === "success") {
      setPortfolio(data.data);
    }
  }, [data, setPortfolio]);

  return { data: data?.data || [], isLoading, isRefetching, isFetching, error };
};

export { useGetPortfolio };
