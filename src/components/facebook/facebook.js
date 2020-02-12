import React, {Component} from 'react';
import FacebookLogin from "react-facebook-login";
import Swal from "sweetalert2";
import {login, loginSocial} from "../../actions/login.action";
import {connect} from "react-redux";
import {
    itoplusUrl,
    mainUrl,
} from "../../constants";


class Facebook extends Component {

    componentDidMount() {
        //window.location.reload();
        const query = new URLSearchParams(this.props.location.search);
        let link = query.get('link');
        let status = query.get('status');

        if(status == 1){
            let url = ''
        }
    }

    goBack =(route)=> {
        this.props.history.push('/setting');
    };
    goHome =()=>{
        this.props.history.push('/home');
    }
    responseFacebook = async (response) => {
        const query = new URLSearchParams(this.props.location.search);
        let link = query.get('link');
        if(link === undefined || link === null){
            link = await localStorage.getItem('query_link');
            if(link === undefined){
                link = 'newrich999';
            }
        }

        if(response.error !== undefined){
            //message
            Swal.fire({
                title: '',
                text: response.error.message,
                icon: 'warning',
                timer: 2000,
                buttons: false,
            });
        }
        if(response.id !== undefined){
            console.log("response");
            console.log(response.id);
            let formData = new FormData();
            formData.append("id", response.id);
            formData.append("name", response.name);
            formData.append("email", response.email);
            this.props.loginSocial(formData, this.props.history)
            setTimeout(()=>{
                // console.error(this.props.loginReducer.isError);
                if(this.props.loginReducer.isError === true){
                    let {errMessage} = this.props.loginReducer;
                    Swal.fire({
                        title: '',
                        text: errMessage,
                        icon: 'warning',
                        timer: 2000,
                        buttons: false,
                    });
                }else{
                    this.goHome();
                }
            },1500);
        }


    }
    render() {
        return (
            <div>
                <FacebookLogin
                    appId="191638915353261" //APP ID NOT CREATED YET
                    fields="name,email,picture"
                    autoLoad={true}
                    callback={this.responseFacebook}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => ({
    loginReducer,
});
const mapDispatchToProps = {
    login,
    loginSocial
}
export default connect(mapStateToProps, mapDispatchToProps)(Facebook);
