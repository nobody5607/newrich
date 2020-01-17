import { combineReducers } from "redux";
import loginReducer from './login.reducers';
import modalReducer from './modal.reducers';
import memberReducer from './member.reducers';
import allmemberReducer from './allmember.reducers';
import registerReducer from './register.reducers';
import profileReducer from './profile.reducers';
import updateprofileReducer from './updateprofile.reducers';
import orderReducer from './order.reducers';

import incomeReducer from './income.reducers';


export default combineReducers({
    loginReducer,
    registerReducer,
    profileReducer,
    updateprofileReducer,
    modalReducer,
    memberReducer,
    allmemberReducer,
    orderReducer,
    incomeReducer
})
