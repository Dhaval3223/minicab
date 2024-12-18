import { useQuery } from "react-query";
import axiosInstance from "../utils/axiosInstance";

const fetchUserTransactionList = async (params) => {
  const { data } = await axiosInstance.get(
    "https://minicab.124124.site/public/api/get-user-transaction-list",
    { params }
  );
  return data;
};

const useUserTransactionList = (params, options = {}) => {
  return useQuery(
    ["transactions", params],
    () => fetchUserTransactionList(params),
    // {
    //   keepPreviousData: true,
    //   ...options,
    // }
  );
};

export default useUserTransactionList;
