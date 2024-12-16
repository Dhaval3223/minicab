import { useMutation } from 'react-query';
import axiosInstance from '../utils/axiosInstance';

export const terminateSubscription = async (isAutoRenew) => {
  const response = await axiosInstance.post('/b2b-user-terminate-subscription', { is_auto_renew: isAutoRenew });
  return response.data;
};

export const useTerminateSubscription = () => {
  return useMutation((isAutoRenew) => terminateSubscription(isAutoRenew));
};
