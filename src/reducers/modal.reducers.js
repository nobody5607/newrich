import {
    MODAL_OPEN,
    MODAL_CLOSE
  } from "../constants";
  
  const initialState = {
    modal: false, 
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case MODAL_OPEN:

        return { ...state,modal: payload}; 
      case MODAL_CLOSE:

        return { ...state,modal: false}; 
      default:
        return state;
    }
  };
