import { useMutation } from "react-query";
import axiosInstance from "../utils/axiosInstance";
// API Utility Functions
export const freezeSubscription = async (data) => {
  const response = await axiosInstance.post(
    "/b2b-user-freeze-subscription",
    data
  );
  return response.data;
};

export const cancelSubscription = async (data) => {
  const response = await axiosInstance.post(
    "/b2b-user-cancel-subscription",
    data
  );
  return response.data;
};

export const terminateSubscription = async (data) => {
  const response = await axiosInstance.post(
    "/b2b-user-terminate-subscription",
    data
  );
  return response.data;
};
// Hook for freezing a subscription
export const useFreezeSubscription = () => {
  return useMutation((data) => freezeSubscription(data));
};

// Hook for canceling a subscription
export const useCancelSubscription = () => {
  return useMutation((data) => cancelSubscription(data));
};

// Hook for terminating a subscription
export const useTerminateSubscription = () => {
  return useMutation((data) => terminateSubscription(data));
};
