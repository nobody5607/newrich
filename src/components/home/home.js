import React, { Component } from 'react'; 
import Header from '../header';
import Menus from "../menus/menus";
import {withStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import News from '../News';

//redux
import { connect } from "react-redux";
import * as actions from "../../actions/member.action";
import {profile} from "../../actions/profile.action";

import {
    itoplusUrl
} from "../../constants";

import './home.css';
import Bussinese from "./bussinese";

const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px',
        marginTop:'100px'
    },
    card: {
        marginTop: '10px'
    },
    marginTop:{
      
      background:'#f58220',
      paddingTop: '10px',
       paddingBottom: '10px',
    },
    inline: {
        display: 'inline',
    },
    btn_right: {
        textAlign: 'right',
        display: 'block'
    },
    image: {
        textAlign:'center',
        width: '60px',
        height: '60px',
        marginRight: '15px'
    },
    imageCenter: {
        textAlign:'left',
        width:'50px',
        height:'50px'

    },
    text_right:{
        textAlign: 'right',
        fontSize:'8px',
        color:'#9E9E9E'
    },
    text_center:{
        textAlign:'center',
        marginTop: '10px'
    },
    fab:{
        width: '100px',
        height: '100px',
        padding:'10px'
    },
    fabMain:{
        width:'200px',
        height:'200px',
        background:'#fff',
        cursor:'default'
    },
    hr:{
        borderWidth: "1px",
        border:'1px solid #e5e5e7'
    },
    font12:{
        fontSize:'14pt',
        fontWeight:'bold',
        color:"#b3b3b3"
    },
    gridHeader:{
        padding:'10px'
    }
});
class Home extends Component {
    componentDidMount() {
        this.props.profile(true);
        this.props.getMemberUrl();
    }

    memberDetail =(id)=> {

        //alert(id)
        this.props.history.push('/member-detail?id='+id);
    };
    inCome =(id)=> {
        this.props.history.push('/income');
    };
    goBack =()=> {
        this.props.history.push('/home');
    };
    render() {
        const {classes} = this.props;
        const { isFetching, result } = this.props.memberReducer;
        const { profileResult } = this.props.profileReducer;



        return (
            <div >
                <Header header='Newriched'/>
                <div className={classes.marginTop}>
                    <Grid container>
                        <Grid item xs={12} className={classes.gridHeader}>
                            <Grid container>
                                <Grid item md={3} xs={3} style={{marginLeft:'-3px'}}>
                                    <Avatar className={classes.imageCenter} id="fixed-image"
                                            alt="Travis Howard"
                                            src={profileResult && profileResult.profile && profileResult.profile.avatar_path !== undefined && profileResult.profile.avatar_path}/>
                                </Grid>
                                <Grid item md={9} xs={9} className={classes.font12} style={{color:'rgb(0, 121, 145)'}}>
                                    <div className="profile-header">
                                        <img alt="login_image" src={`${process.env.PUBLIC_URL}/assets/images/user1.png`} style={{width:'18px',height:'18px'}}/>{' '}
                                        Hello,{profileResult && profileResult.profile.name}</div>
                                    <div className="profile-header">
                                        <img alt="login_image" src={`${process.env.PUBLIC_URL}/assets/images/star.png`} style={{width:'18px',height:'18px'}}/>{' '}
                                        ID: {profileResult && profileResult.profile.member_id}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <ul className="nav nav-pills nav-justified home-menu" tabIndex='1'>
                            <li className="nav-item">
                                <a onClick={this.inCome} className="nav-link " href="#" tabIndex='1'>
                                    <div class='icon-head'>
                                        <img alt="login_image" src={`${process.env.PUBLIC_URL}/assets/images/price.png`} style={{width:'40px'}}/>{' '}
                                    </div>
                                    <div class='text-head'>รายรับรวม</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " target="_blank" href={itoplusUrl} tabindex="-1" aria-disabled="true">
                                    <div class='icon-head'>
                                        <img alt="login_image" src={`${process.env.PUBLIC_URL}/assets/images/order.png`} style={{width:'40px'}}/>{' '}
                                    </div>
                                    <div class='text-head'>สั่งสินค้า</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " target="_blank" href={itoplusUrl} tabindex="-1" aria-disabled="true">
                                    <div class='icon-head'>
                                        <img alt="login_image" src={`${process.env.PUBLIC_URL}/assets/images/money.png`} style={{width:'50px',marginTop:'3px'}}/>{' '}
                                    </div>
                                    <div class='text-head'>ขอคืนเงิน</div>
                                </a>
                            </li>
                    </ul>
                </div>
                <News /> 
                <Bussinese history={this.props.history}/>
                
                <br/><br/><br/>

                <Menus/>
            </div>
        );
    }
}
const mapStateToProps = ({ memberReducer,profileReducer }) => ({
    memberReducer,
    profileReducer,
});
const mapDispatchToProps = {
    ...actions,
    profile
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
