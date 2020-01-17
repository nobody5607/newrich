import {
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    errMessage:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case REGISTER_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false,errMessage:null };
      case REGISTER_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false,errMessage:null };
      case REGISTER_FAILED:
        //console.log(payload); 
        return { ...state, result: null, isFetching: false, isError: true,errMessage:payload };
      default:
        return state;
    }
  };
