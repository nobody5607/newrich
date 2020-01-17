import {
  AMEMBER_FETCHING,
  AMEMBER_SUCCESS,
  AMEMBER_FAILED,
} from "../constants";
  
  const initialState = {
    members: null,
    isFetching: false,
    isError: false,
    errMessage:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case AMEMBER_FETCHING:
        return { ...state, members: null, isFetching: true, isError: false,errMessage:null };
      case AMEMBER_SUCCESS:
        return { ...state, members: payload, isFetching: false, isError: false,errMessage:null };
      case AMEMBER_FAILED:
        //console.log(payload); 
        return { ...state, members: null, isFetching: false, isError: true,errMessage:payload };
      default:
        return state;
    }
  };
