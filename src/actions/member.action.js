import { httpClient } from "./../utils/HttpClient";
import {
    MEMBER_FETCHING,
    MEMBER_SUCCESS,
    MEMBER_FAILED,

    GROUP_FETCHING,
    GROUP_SUCCESS,
    GROUP_FAILED,
    server
} from "../constants";

//set
export const setMemberFetching = payload => ({
    type: MEMBER_FETCHING
});
export const setMemberSuccess = payload => ({
    type: MEMBER_SUCCESS,
    payload
});
export const setMemberFailed = payload => ({
    type: MEMBER_FAILED,
    payload
});



export const setGroupFetching = payload => ({
    type: GROUP_FETCHING
});
export const setGroupSuccess = payload => ({
    type: GROUP_SUCCESS,
    payload
});
export const setGroupFailed = payload => ({
    type: GROUP_FAILED,
    payload
});
//get
export const geMembers = (id) => {
    return dispatch => {
        dispatch(setMemberFetching());
        doGetMember(dispatch,id);
    };
};
export const getMemberUrl=()=>{
    return async dispatch => {
        try {
            dispatch(setMemberFetching());
            let result = await httpClient.get(`${server.GetMemberUrl}?site=${process.env.REACT_APP_SITE}`);
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
}
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
const doGetMember = async (dispatch,id) => {
    try {
        let result = null;
        if(id !== undefined){
            result = await httpClient.get(`${server.MEMBERBYID_URL}?id=${id}&site=${process.env.REACT_APP_SITE}`);
        }else{
            result = await httpClient.get(`${server.MEMBER_URL}/index?limit=9&site=${process.env.REACT_APP_SITE}`);
        }
        dispatch(setMemberSuccess(result.data));
    } catch (err) {
        dispatch(setMemberFailed(JSON.stringify(err)));
    }
};


export const fetchGroup=()=>{
    return async dispatch => {
        dispatch(setGroupFetching());
        try{
            let result = await httpClient.get(`${server.MEMBER_URL}/group?site=${process.env.REACT_APP_SITE}`);
            if(result.data.status === 'success'){
                let {data} = result.data;
                dispatch(setGroupSuccess(data));
            }else{
                let {data} = result.data;
                dispatch(setGroupFailed(data.message));
            }
        }catch(ex){
            dispatch(setGroupFailed(ex.message));
        }
    };
}
export const fetchGroupDetail=(groupID)=>{
    return async dispatch => {
        dispatch(setGroupFetching());
        try{
            let result = await httpClient.get(`${server.MEMBER_URL}/group-detail?groupID=${groupID}`);
            if(result.data.status === 'success'){
                let {data} = result.data;
                dispatch(setGroupSuccess(data));
            }else{
                let {data} = result.data;
                dispatch(setGroupFailed(data.message));
            }
        }catch(ex){
            dispatch(setGroupFailed(ex.message));
        }
    };
}
