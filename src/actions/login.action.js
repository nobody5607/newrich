import {
    LOGIN_FETCHING,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    server 
  } from "../constants";
  import { httpClient } from "./../utils/HttpClient";
import Swal from 'sweetalert2';
  // Forward to reducer
  export const setLoginStateToFetch = () => ({
    type: LOGIN_FETCHING
  });
  
  export const setLoginStateToSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload
  });
  
  export const setLoginStateToFailed = payload => ({
    type: LOGIN_FAILED,
    payload
  });
  
  export const setLoginStateToLogout = () => ({
    type: LOGOUT,
  });
  
  // Called by Login Component
export const loginSocial = (value,history)=>{
  return async dispatch => {
    try {
      dispatch(setLoginStateToFetch()); // fetching
      let result = await httpClient.post(server.LOGINSOCIAL_URL, value);

      if (result.data.status === 'success') {
        //localStorage.setItem(server.TOKEN_KEY, result.data.user.auth_key);
        //localStorage.setItem(server.TOKEN_KEY, )
        let {data} = result.data;

        localStorage.setItem(server.TOKEN_KEY, data.user.auth_key);
        localStorage.setItem('link', data.profile.link);
        localStorage.setItem('name', data.profile.name);
        localStorage.setItem('image', data.profile.avatar_path);

        localStorage.setItem('profile',JSON.stringify(data.profile));

        dispatch(setLoginStateToSuccess(result.data));
      } else {
        //console.error(result.data.message);
        dispatch(setLoginStateToFailed(result.data.message));
      }
    } catch (error) {
      dispatch(setLoginStateToFailed({data: {message: error}}));
    }
  };
}

export const login = (value,history) => {
    return async dispatch => {
      try {
        dispatch(setLoginStateToFetch()); // fetching
        let result = await httpClient.post(server.LOGIN_URL, value);

        if (result.data.status === 'success') {
          //localStorage.setItem(server.TOKEN_KEY, result.data.user.auth_key);
          //localStorage.setItem(server.TOKEN_KEY, )
          let {data} = result.data;

          Swal.fire({
            title: '',
            text: data.message,
            icon: 'success',
            timer: 2000,
            buttons: false,
          });

          localStorage.setItem(server.TOKEN_KEY, data.user.auth_key);
          localStorage.setItem('link', data.profile.link);
          localStorage.setItem('name', data.profile.name);
          localStorage.setItem('image', data.profile.avatar_path);

          localStorage.setItem('profile',JSON.stringify(data.profile));

          dispatch(setLoginStateToSuccess(result.data));
          history.push('/home');
        } else {
          let {data} = result;
          //console.error(result.data.message);
          Swal.fire({
            title: '',
            text: data.message,
            icon: 'warning',
            timer: 2000,
            buttons: false,
          });
          dispatch(setLoginStateToFailed(result.data.message));
        }
      } catch (error) {        
          dispatch(setLoginStateToFailed({data: {message: error}}));
      }
    };
  };
  
  
  export const logout = (history)=> {
      return (dispatch) =>{
        localStorage.removeItem(server.TOKEN_KEY);
        dispatch(setLoginStateToLogout())  
        history.push("/login");
      }
  }
