import {
  INCOME_FETCHING,
  INCOME_SUCCESS,
  INCOME_FAILED,
} from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    errMessage:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case INCOME_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false,errMessage:null };
      case INCOME_SUCCESS:
        // console.log(payload);
        return { ...state, result: payload, isFetching: false, isError: false,errMessage:null };
      case INCOME_FAILED:
        //console.log(payload); 
        return { ...state, result: null, isFetching: false, isError: true,errMessage:payload };
      default:
        return state;
    }
  };
