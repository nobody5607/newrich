import React, { Component } from 'react';
import Header from '../header';
import Menus from "../menus/menus";
class Setting extends Component {
    render() {
        return (
            <div>
               <Header header='Setting'/>

                <Menus/>
            </div>
        );
    }
}

export default Setting;