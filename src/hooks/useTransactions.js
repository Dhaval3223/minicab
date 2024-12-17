import { useQuery } from "react-query";
import axiosInstance from "../utils/axiosInstance";

const fetchTransactions = async (transactionMode) => {
  const { data } = await axiosInstance.get(`/get-user-transaction-list`, {
    params: { transaction_mode: transactionMode },
  });
  return data;
};

export const useTransactions = (transactionMode) => {
  return useQuery(
    ["transactions", transactionMode],
    () => fetchTransactions(transactionMode),
    {
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      refetchOnWindowFocus: false, // Disable refetch on window focus
      enabled: !!transactionMode, // Ensure query is enabled only when transactionMode is set
    }
  );
};
