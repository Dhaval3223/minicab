// src/hooks/useGetUserSubscriptions.js
import { useQuery } from "react-query";
import axiosInstance from "../utils/axiosInstance";

// Fetch function for user subscriptions in basket
const fetchUserSubscriptionsInBasket = async () => {
  const response = await axiosInstance.get("/get-user-subscriptions-in-basket");
  return response.data;
};

// Custom hook
export const useUserSubscriptionsInBasket = (options = {}) => {
  return useQuery(
    ["userSubscriptionsInBasket"], // Query key for React Query
    fetchUserSubscriptionsInBasket,
    options
  );
};
