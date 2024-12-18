import { useQuery } from "react-query";
import axiosInstance from "../utils/axiosInstance";

// Fetch function for the merchant refund report
const fetchMerchantRefundReport = async (params) => {
  const response = await axiosInstance.get("/merchant-refund-report-list", {
    params,
  });
  return response.data;
};

// Custom hook to fetch the merchant refund report
const useMerchantRefundReport = (params) => {
  return useQuery(["merchantRefundReport", params], () =>
    fetchMerchantRefundReport(params)
  );
};

export default useMerchantRefundReport;
