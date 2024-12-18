import { useQuery } from 'react-query';
import axiosInstance from "../utils/axiosInstance";

const fetchUserActiveSubscription = async () => {
  const response = await axiosInstance.get("/get-user-active-subscription");
  return response.data;
};

export const useUserActiveSubscription = () => {
  return useQuery(["userActiveSubscription"], fetchUserActiveSubscription, {
    // staleTime: 1000 * 60 * 5, // Data will be considered fresh for 5 minutes
    // cacheTime: 1000 * 60 * 10, // Cache the data for 10 minutes
    retry: 0, // Retry failed requests twice
  });
};
