import {
    INCOME_FETCHING,
    INCOME_SUCCESS,
    INCOME_FAILED,
    server
  } from "../constants";
  import { httpClient } from "./../utils/HttpClient";
import EventNoteIcon from '@material-ui/icons/EventNote';
import Avatar from "@material-ui/core/Avatar";
import React from "react";
  
  // Forward to reducer
  export const setOrderStateToFetch = () => ({
    type: INCOME_FETCHING
  });
  
  export const setOrderStateToSuccess = payload => ({
    type: INCOME_SUCCESS,
    payload
  });
  
  export const setOrderStateToFailed = payload => ({
    type: INCOME_FAILED,
    payload
  });

  // order
  export const getInCome = (id,history) => {
    return async dispatch => {
      try {
        dispatch(setOrderStateToFetch()); // fetching
        let url = `${server.INCOME_URL}`;
        let result = await httpClient.get(url+`?site=${process.env.REACT_APP_SITE}`);

        if (result.data.status === 'success') {
            let {data} = result.data;
            let output = [];
            for(let d of data){

                if(parseInt(d.id)%2 === 0){

                    d.icon = <Avatar style={{background:'#FFC107'}}><EventNoteIcon/></Avatar>;
                }else{
                    d.icon = <Avatar style={{background:'rgb(74, 189, 172)'}}><EventNoteIcon/></Avatar>;
                }
                output.push(d);
            }
            console.log(output);
            dispatch(setOrderStateToSuccess(data));
        } else {
          dispatch(setOrderStateToFailed(result.data.message));
        }
      } catch (error) {        
          dispatch(setOrderStateToFailed({data: {message: error}}));
      }
    };
  };
  

