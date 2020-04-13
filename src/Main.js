import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import Register from './components/register/register';
import Login from './components/login';
import AllMember from './components/all-member';
import Home from './components/home';
import Order from './components/order';
import Setting from './components/setting';
import MyMember from './components/my-member';
import MemberDetail from './components/member-detail';
import OrderDetail from "./components/order-detail/order-detail";
import Income from "./components/income";
import './main.css';
import EditProfile from "./components/edit-profile";
import About from "./components/about";
import Help from "./components/help";
import Link from "./components/link";
import ChangePassword from "./components/change-password/change-password";
import {
    server
} from "./constants";
import BussineseDetail from "./components/home/bussinese-detail";
import Payment from './components/payment';
import token from './components/token';
const isLoggedIn = ()=>{
    return localStorage.getItem(server.TOKEN_KEY) != null
}
// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            // ternary condition
            isLoggedIn() === true ? (
                    <Component {...props}/>
                )
                :
                (<Redirect to="/login"/>)
        }
    />
);
export default class Main extends Component {
    render() {
        return (
            <div>
                <div className='content'>
                <Router>

                    <SecuredRoute exact={true} path="/" component={()=>(<Redirect to="/login"/>)}/>
                    <SecuredRoute path="/home" component={Home}/>
                    <SecuredRoute path="/order" component={Order}/>
                    <SecuredRoute path="/order-detail" component={OrderDetail}/>
                    <SecuredRoute path="/my-member" component={MyMember}/>
                    <SecuredRoute path="/all-member" component={AllMember}/>
                    <SecuredRoute path="/member-detail" component={MemberDetail}/>
                    <SecuredRoute path="/income" component={Income}/>
                    <SecuredRoute path="/edit-profile" component={EditProfile}/>
                    <SecuredRoute path="/link" component={Link}/>
                    <SecuredRoute path="/setting" component={Setting}/>
                    <SecuredRoute path="/about" component={About}/>
                    <SecuredRoute path="/help" component={Help}/>
                    <SecuredRoute path="/payment" component={Payment}/>
                    <SecuredRoute path="/token" component={token}/>
                    <SecuredRoute path="/change-password" component={ChangePassword}/>
                    <SecuredRoute path="/bussinese-detail" component={BussineseDetail}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>

                    </Router>
                </div>
                
            </div>
        )
    }
}
