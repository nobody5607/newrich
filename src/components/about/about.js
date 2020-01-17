import React, {Component} from 'react';
import Header from "../header/header";

class About extends Component {
    goBack =(route)=> {
        this.props.history.push('/setting');
    };
    render() {
        return (
            <div>
                <Header header="About" goback={true} route={this.goBack}/>
                <div style={{marginTop:'100px'}}>ABOUT</div>
            </div>
        );
    }
}

export default About;
