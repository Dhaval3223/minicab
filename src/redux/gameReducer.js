import { GET_LOADING, SET_TEST,  } from "./constant";

export const gameData = (state = { loading: false, data: [] }, action) => {
  switch (action.type) {
    case SET_TEST:
      return { ...state, data: action.data };
    // case GET_LOADING:
    //   return { ...state, loading: action.payload };
    default:
      return state;
  }
};

