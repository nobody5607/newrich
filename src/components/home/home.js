import React, { Component } from 'react'; 
import Header from '../header';
import Menus from "../menus/menus";
import {withStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';

//redux
import { connect } from "react-redux";
import * as actions from "../../actions/member.action";
import {profile} from "../../actions/profile.action";

import {
    itoplusUrl
} from "../../constants";

import './home.css';
import MemberGrid from "../member-grid";
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
      marginTop:'80px'
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
                <Header header='Home'/>
                <div className={classes.marginTop}>
                    <Grid container>
                        <Grid item xs={12}>
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
                </div>
                <hr className="hrstyle" style={{marginTop:'25px'}}/>
                <Grid container className='color-gray' >
                    <div style={{marginTop:'15px',fontWeight:'bold',marginLeft:'20px'}}>
                        <div> รายรับรวม </div>
                    </div>

                    <Grid item xs={12} className={classes.text_center}>
                        <Fab className={classes.fabMain} aria-label="add" size={"large"} style={{color:'#ff4f8b'}}>
                            <div>
                                <div>{profileResult && profileResult.order && profileResult.order.currentMonth }</div>

                                <div><h1 style={{color:'#ff4f8b'}}>{(profileResult && profileResult.order && profileResult.order.totalPrice) ? profileResult.order.totalPrice : '0'}฿</h1></div>
                                <div onClick={this.inCome}>ดูรายละเอียด</div>
                            </div>
                        </Fab>
                    </Grid>
                    <Grid item xs={12} className={classes.text_right} style={{marginRight:'20px'}}>
                        <a rel="noopener noreferrer" target="_blank" href={itoplusUrl}>
                            <Fab className={classes.fab} color="secondary" aria-label="add" size={"large"}>
                                สั่งสินค้า<br/>เพิ่มเติม
                            </Fab>
                        </a>
                    </Grid>
                </Grid>
                <hr className="hrstyle" style={{marginTop:'30px'}}/>

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
