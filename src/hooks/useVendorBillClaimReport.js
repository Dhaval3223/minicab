import { useQuery } from "react-query";
import axiosInstance from "../utils/axiosInstance";

const fetchVendorBillClaimReport = async (params) => {
  const response = await axiosInstance.get("/vendor-bill-claim-report-list", { params });
  return response.data;
};

const useVendorBillClaimReport = (params) => {
  return useQuery(["vendorBillClaimReport", params], () => fetchVendorBillClaimReport(params));
};

export default useVendorBillClaimReport;
