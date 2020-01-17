import {
  ORDER_FETCHING,
  ORDER_SUCCESS,
  ORDER_FAILED,
} from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    errMessage:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case ORDER_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false,errMessage:null };
      case ORDER_SUCCESS:
        // console.log(payload);
        return { ...state, result: payload, isFetching: false, isError: false,errMessage:null };
      case ORDER_FAILED:
        //console.log(payload); 
        return { ...state, result: null, isFetching: false, isError: true,errMessage:payload };
      default:
        return state;
    }
  };
