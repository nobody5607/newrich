import React, {Component} from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import './menu.css';

class Menus extends Component {
    state = {
        value: '/home',
    };

    componentDidMount() {
        let value = window.location.pathname;
        if (value === '/order-detail') {
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
                    className="tab_primary"
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                >
                    <Tab className="tab_color_while" label="" value='/home' icon={<img style={{width:'25px'}} src={`${process.env.PUBLIC_URL}/assets/images/home.png`}/>}/>
                    <Tab className="tab_color_while" label="" value='/my-member'
                         icon={<img style={{width:'25px'}} src={`${process.env.PUBLIC_URL}/assets/images/user2.png`}/>}/>
                    <Tab className="tab_color_while" label="" value='/order' icon={<img style={{width:'25px'}} src={`${process.env.PUBLIC_URL}/assets/images/cart.png`}/>}/>
                    <Tab className="tab_color_while" label="" value='/setting'
                         icon={<img style={{width:'25px'}} src={`${process.env.PUBLIC_URL}/assets/images/setting.png`}/>}/>

                </Tabs>
            </Paper>

        )
    }
}

export default withRouter(Menus)  
