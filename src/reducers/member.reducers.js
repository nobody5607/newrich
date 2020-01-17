import {
  MEMBER_FETCHING,
  MEMBER_SUCCESS,
  MEMBER_FAILED,
} from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    errMessage:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case MEMBER_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false,errMessage:null };
      case MEMBER_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false,errMessage:null };
      case MEMBER_FAILED:
        //console.log(payload); 
        return { ...state, result: null, isFetching: false, isError: true,errMessage:payload };
      default:
        return state;
    }
  };
