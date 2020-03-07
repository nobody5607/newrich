import {
  MEMBER_FETCHING,
  MEMBER_SUCCESS,
  MEMBER_FAILED,

  GROUP_FETCHING,
  GROUP_SUCCESS,
  GROUP_FAILED
} from "../constants";
  
  const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    errMessage:null,

    result2: null,
    isFetching2: false,
    isError2: false,
    errMessage2:null
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

      case GROUP_FETCHING:
        return { ...state, result2: null, isFetching2: true, isError2: false,errMessage2:null };
      case GROUP_SUCCESS:
        return { ...state, result2: payload, isFetching2: false, isError2: false,errMessage2:null };
      case GROUP_FAILED:
        //console.log(payload);
        return { ...state, result2: null, isFetching2: false, isError2: true,errMessage2:payload };

      default:
        return state;
    }
  };
