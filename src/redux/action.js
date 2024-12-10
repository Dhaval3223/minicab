import { GET_LOADING, GET_TEST } from "./constant"
export const getGame = () => {
  console.log( "TEST action call");
  return {
    type: GET_TEST,
   
  };
};
export const setLoading = (loading) => ({
  type: GET_LOADING,
  payload: loading
});




