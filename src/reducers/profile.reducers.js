import {
  PROFILE_FETCHING,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
} from "../constants";
  
  const initialState = {
    profileResult: null,
    profileFetching: false,
    profileError: false,
    errMessage:null
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case PROFILE_FETCHING:
        return { ...state, profileResult: null, profileFetching: true, profileError: false,errMessage:null };
      case PROFILE_SUCCESS:
         
        return { ...state, profileResult: payload, profileFetching: false, profileError: false,errMessage:null };
      case PROFILE_FAILED:
         
        return { ...state, profileResult: null, profileFetching: false, profileError: true,errMessage:payload };
      default:
        return state;
    }
  };
