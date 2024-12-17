import { useQuery } from "react-query";
import axiosInstance from "../utils/axiosInstance";

// Common hook for fetching balance
export const useFetchBalance = (type) => {
  const fetchBalance = async () => {
    let url = "";
    if (type === "deposit") url = "/get-user-deposit-balance";
    if (type === "wallet") url = "/get-user-wallet-balance";
    if (type === "credit") url = "/get-user-credit-balance";

    const response = await axiosInstance.get(url);
    if (response.data.type === "success") {
      return response.data.data.balance;
    } else {
      throw new Error("Failed to fetch balance.");
    }
  };

  return useQuery(["balance", type], fetchBalance, {
    enabled: !!type, // Only fetch if type is set
    refetchOnWindowFocus: false, // Avoid frequent calls on window focus
  });
};
