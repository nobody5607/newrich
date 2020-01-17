import {
  UPDATE_PROFILE_FETCHING,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
} from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    errMessage:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case UPDATE_PROFILE_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false,errMessage:null };
      case UPDATE_PROFILE_SUCCESS:
        // console.log(payload);
        return { ...state, result: payload, isFetching: false, isError: false,errMessage:null };
      case UPDATE_PROFILE_FAILED:
        //console.log(payload); 
        return { ...state, result: null, isFetching: false, isError: true,errMessage:payload };
      default:
        return state;
    }
  };
