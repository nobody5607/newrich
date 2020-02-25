import {
    PROFILE_FETCHING,
    PROFILE_SUCCESS,
    PROFILE_FAILED,
    UPDATE_PROFILE_FETCHING,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILED,

    server
  } from "../constants";
  import { httpClient } from "./../utils/HttpClient";
  
  // Forward to reducer
  export const setProfileStateToFetch = () => ({
    type: PROFILE_FETCHING
  });
  
  export const setProfileStateToSuccess = payload => ({
    type: PROFILE_SUCCESS,
    payload
  });
  
  export const setProfileStateToFailed = payload => ({
    type: PROFILE_FAILED,
    payload
  });


export const setUpdateProfileStateToFetch = () => ({
    type: UPDATE_PROFILE_FETCHING
});

export const setUpdateProfileStateToSuccess = payload => ({
    type: UPDATE_PROFILE_SUCCESS,
    payload
});

export const setUpdateProfileStateToFailed = payload => ({
    type: UPDATE_PROFILE_FAILED,
    payload
});

  
  // Called by Login Component
  export const profile = (total,history) => {
    if(total === null || total === undefined){
        total = true;
    }

    return async dispatch => {
      try {
        dispatch(setProfileStateToFetch()); // fetching
        let url = `${server.PROFILE_URL}?site=${process.env.REACT_APP_SITE}&total=${total}`;

        let result = await httpClient.get(url);

        if (result.data.status === 'success') {
            let {data} = result.data;
            dispatch(setProfileStateToSuccess(data));
        } else {
          dispatch(setProfileStateToFailed(result.data.message));
        }
      } catch (error) {        
          dispatch(setProfileStateToFailed({data: {message: error}}));
      }
    };
  };

export const changePassword = (values) => {
    let formData = new FormData()
    formData.append("password", values.password);
    formData.append("new_password", values.new_password);
    return async dispatch => {
        try {
            await httpClient.post(server.CHANGEPASSWORD_URL, formData);
        } catch (error) {
            dispatch(setUpdateProfileStateToFailed({data: {message: error}}));
        }
    };
}
export const updateProfile = (value) => {
    return async dispatch => {
        try {
            dispatch(setUpdateProfileStateToFetch()); // fetching
            let result = await httpClient.post(server.UPDATEMYPROFILE_URL, value);
            let {data} = result;
            if (data.status === 'success') {



                localStorage.setItem('image', data.data.image);
                dispatch(setUpdateProfileStateToSuccess(data.message));
            } else {
                dispatch(setUpdateProfileStateToFailed(data.message));
            }
        } catch (error) {
            dispatch(setUpdateProfileStateToFailed({data: {message: error}}));
        }
    };
}

export const myProfile = (history) => {
    return async dispatch => {
        try {
            dispatch(setUpdateProfileStateToFetch());
            let url = `${server.MYPROFILE_URL}`;

            let result = await httpClient.get(url);

            if (result.data.status === 'success') {
                let {data} = result.data;
                dispatch(setUpdateProfileStateToSuccess(data));
            } else {
                dispatch(setUpdateProfileStateToFailed(result.data.message));
            }
        } catch (error) {
            dispatch(setUpdateProfileStateToFailed({data: {message: error}}));
        }
    };
};

