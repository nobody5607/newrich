import { httpClient } from "./../utils/HttpClient";
import {
    AMEMBER_FETCHING,
    AMEMBER_SUCCESS,
    AMEMBER_FAILED,
    server
} from "../constants";

//set
export const setMemberFetching = payload => ({
    type: AMEMBER_FETCHING
});
export const setMemberSuccess = payload => ({
    type: AMEMBER_SUCCESS,
    payload
});
export const setMemberFailed = payload => ({
    type: AMEMBER_FAILED,
    payload
});

export const getMemberByType=(type)=>{
    if(type === undefined){
        type = 'B2B';
    }
    return async dispatch => {
        try {
            dispatch(setMemberFetching());
            let result = await httpClient.get(`${server.MEMBERBYTYPE_URL}?site=${process.env.REACT_APP_SITE}&type=${type}`);
            let {data} = result;
            if(data.status === 'success'){
                dispatch(setMemberSuccess(result.data));
            }else{
                dispatch(setMemberFailed(data.data));
            }

        } catch (err) {
            dispatch(setMemberFailed(JSON.stringify(err)));
        }
    };
};
