import { httpClient } from "./../utils/HttpClient";
import {  
    SPECIMENT_SUCCESS,
    SPECIMENT_FETCHING,
    SPECIMENT_FAILED,
    server 
  } from "../constants";

  export const setStateSpecimentToFetching = payload => ({
    type: SPECIMENT_FETCHING
  });
  export const setStateSpecimentToSuccess = payload => ({
    type: SPECIMENT_SUCCESS,
    payload
  });
  
  export const setStateSpecimentToFailed = payload => ({
    type: SPECIMENT_FAILED,
    payload

  });

  export const getSpeciment = (id) => {
    return dispatch => {
      dispatch(setStateSpecimentToFetching());
      doGetSpeciment(dispatch,id); 
    };
  };

  export const insertSpeciment = (formData) => {
    return async dispatch => {
      try{
        let dataInsert = await httpClient.post(server.QUERY_URL, formData);
        let {result} = dataInsert.data;
        if(result === "ok"){

          await doGetSpeciment(dispatch);
        }else{ 

          dispatch(setStateSpecimentToFailed(dataInsert.data.data));
        }
      }catch(error){
        dispatch(setStateSpecimentToFailed(error));
      }
      
      //history.goBack();
    };
  };
  export const updateSpeciment = (formData) => {
    return async dispatch => {
      try{
        let dataUpdate = await httpClient.put(server.QUERY_URL, formData);
        let {result} = dataUpdate.data;
        if(result === "ok"){

          await doGetSpeciment(dispatch);
        }else{ 

          dispatch(setStateSpecimentToFailed(dataUpdate.data.data));
        }
      }catch(error){
        dispatch(setStateSpecimentToFailed(error));
      }
      
      //history.goBack();
    };
  };

  export const deleteSpeciment = id =>{
    let _condition = btoa(JSON.stringify({id:id})); 

     return async dispatch =>{
        dispatch(setStateSpecimentToFetching());
        await httpClient.delete(`${server.QUERY_URL}`,{params: {_table:'speciment',_condition:_condition}})
        await doGetSpeciment(dispatch);  

     }
  }

  export const getSpecimentByKeyword = event => {
    return async dispatch => {
      var keyword = event.target.value;
      dispatch(setStateSpecimentToFetching());
      
      if (keyword !== null && keyword !== "") {
       let result = await httpClient.get(`${server.QUERY_URL}/search?_table=speciment&_columnName=name&_term=${keyword}`)
       dispatch(setStateSpecimentToSuccess(result.data));
      } else {
        doGetSpeciment(dispatch);
      }
    };
  };


  const doGetSpeciment = async (dispatch,id) => {
   // console.info('doGetSpeciment');
    try {
      let result = null;
      if(id !== undefined){
        let _condition = btoa(JSON.stringify({id:id})); 
         result = await httpClient.get(`${server.QUERY_URL}?_table=speciment&_condition=${_condition}`);
      }else{
         result = await httpClient.get(`${server.QUERY_URL}?_table=speciment`);
      }
      
      dispatch(setStateSpecimentToSuccess(result.data));
    } catch (err) {
      alert(JSON.stringify(err));
      dispatch(setStateSpecimentToFailed());
    }
  };
