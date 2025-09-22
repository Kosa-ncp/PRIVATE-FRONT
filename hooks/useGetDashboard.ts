import { useQuery } from "@tanstack/react-query";
import getDashboardList from "../utils/getDashboardList";

const useGetDashboard = () => {
  const queryKey = ["dashboard"];
  const queryConfig = {
    refetchOnWindowFocus: "always" as const,
    refetchOnMount: "always" as const,
  };

  const { data, isLoading, isRefetching, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: getDashboardList,
  });

  return { data, isLoading, isRefetching, error };
};

export { useGetDashboard };
