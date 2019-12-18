import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";


import Register from './components/register/register';
import Login from './components/login';
import Menus from './components/menus';
import Home from './components/home';
import Order from './components/order';
import Setting from './components/setting';
import MyMember from './components/my-member';
import Container from '@material-ui/core/Container';
import OrderDetail from "./components/order-detail/order-detail";
import './App.css';


class App extends React.Component{
    render(){
        return(
            <Router>

                <Container fixed className='container'>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/order-detail" component={OrderDetail}/>
                    <Route path="/my-member" component={MyMember}/>
                    <Route path="/setting" component={Setting}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                </Container>
            </Router>
        );
    }
}
export default App;