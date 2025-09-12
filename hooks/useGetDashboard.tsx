import { useQuery } from "@tanstack/react-query";
import getDashboardList from "../utils/getDashboardList";

const useGetDashboard = () => {
  const queryKey = ["dashboard"];
  const queryConfig = {
    refetchOnWindowFocus: false,
  };

  const { data, isLoading, error } = useQuery({
    ...queryConfig,
    queryKey,
    queryFn: getDashboardList,
  });

  return { data, isLoading, error };
};

export { useGetDashboard };
