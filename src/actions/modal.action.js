import {  
    MODAL_OPEN,
    MODAL_CLOSE
  } from "../constants";

  export const setModalOpen = payload => ({
    type: MODAL_OPEN,
    payload
  });
  export const setModalClose = () => ({
    type: MODAL_CLOSE 
  });


  export const getToggleModal = (modal) => {
     
    return dispatch => { 
        dispatch(setModalOpen(modal)); 
    };
  };

