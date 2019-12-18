import React, { Component } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import './menu.css';

class Menus extends Component {
  state = {
    value: '/',
  }; 
  componentDidMount(){
    let value = window.location.pathname;
    if(value === '/order-detail'){
      value = '/order';
    }
    this.setState({value});
  }
  handleChange = (event, value) => { 
    this.setState({value});
    this.props.history.push(value);
  }; 
  render() {
    const {value} = this.state; 
    return (
      <Paper square className="root">
      <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="secondary" 
          textColor="secondary"
          variant="fullWidth"
        >
        <Tab label="Home" value='/' icon={<HomeOutlinedIcon />}/>
        <Tab label="Member" value='/my-member' icon={<AccountCircleOutlinedIcon />}/>
        <Tab label="Order" value='/order' icon={<ShoppingBasketOutlinedIcon />}/>
        <Tab label="Setting" value='/setting' icon={<SettingsApplicationsOutlinedIcon />}/>
        
        </Tabs> 
        </Paper>
       
    )
  }
}

export default withRouter(Menus)  