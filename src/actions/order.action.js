import {
    ORDER_FETCHING,
    ORDER_SUCCESS,
    ORDER_FAILED,
    server
  } from "../constants";
  import { httpClient } from "./../utils/HttpClient";
  
  // Forward to reducer
  export const setOrderStateToFetch = () => ({
    type: ORDER_FETCHING
  });
  
  export const setOrderStateToSuccess = payload => ({
    type: ORDER_SUCCESS,
    payload
  });
  
  export const setOrderStateToFailed = payload => ({
    type: ORDER_FAILED,
    payload
  });

  // order
  export const getOrderDetail = (id,history) => {
    return async dispatch => {
      try {
        dispatch(setOrderStateToFetch()); // fetching
        let url = `${server.ORDERDETAIL_URL}?site=${process.env.REACT_APP_SITE}&order_id=${id}`;

        let result = await httpClient.get(url);

        if (result.data.status === 'success') {
            let {data} = result.data;
            dispatch(setOrderStateToSuccess(data));
        } else {
          dispatch(setOrderStateToFailed(result.data.message));
        }
      } catch (error) {        
          dispatch(setOrderStateToFailed({data: {message: error}}));
      }
    };
  };
  

