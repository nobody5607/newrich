import React, {Component} from 'react';
import Header from "../header/header";

class Help extends Component {
    goBack =(route)=> {
        this.props.history.push('/setting');
    };
    render() {
        return (
            <div>
                <Header header="Help" goback={true} route={this.goBack}/>
                <div style={{marginTop:'100px'}}>Help</div>
            </div>
        );
    }
}

export default Help;
