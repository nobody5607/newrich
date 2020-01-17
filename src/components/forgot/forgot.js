import React from 'react';
class Forgot extends React.Component {

    goHome =()=>{
        this.props.history.push('/home');
    }
    register=()=>{
        this.props.history.push('/register');
    }
    login=()=>{
        this.props.history.push('/login');
    }
    render() {
        return (
            <div style={{background:'blue'}}>
                <div className="text-center logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/user.png`}/>

                </div>
            </div>
        );
    }
}
export default Forgot;
