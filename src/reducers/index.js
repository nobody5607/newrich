import { combineReducers } from "redux";
import specimentReducer from './speciment.reducers';
import modalReducer from './modal.reducers';
export default combineReducers({
    specimentReducer,
    modalReducer
})