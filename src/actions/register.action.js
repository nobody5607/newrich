import {
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
    server 
  } from "../constants";
  import { httpClient } from "./../utils/HttpClient";
  
  // Forward to reducer
  export const setRegisterFetch = () => ({
    type: REGISTER_FETCHING
  });
  
  export const setRegisterSuccess = payload => ({
    type: REGISTER_SUCCESS,
    payload
  });
  
  export const setRegisterFailed = payload => ({
    type: REGISTER_FAILED,
    payload
  });
  
  // register
  export const register = (value,history) => {
    return async dispatch => {
      try {
        dispatch(setRegisterFetch()); // fetching
        let result = await httpClient.post(server.REGISTER_URL, value);
        let {data} = result;

        if (data.status === 'success') {
          dispatch(setRegisterSuccess(data.message));
        } else {
          console.warn(data.message);
          dispatch(setRegisterFailed(data.message));
        }
      } catch (error) {        
          dispatch(setRegisterFailed({data: {message: error}}));
      }
    };
  };

