import React, { Component } from 'react'
import { FormControl, Input, InputLabel, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from "../header/header";

import { connect } from "react-redux";
import {profile} from "../../actions/profile.action";
import Swal from "sweetalert2";
const styles = theme => ({
    content: {
        marginTop: '20px',
    },
    gridRoot: {
        padding: '10px',
    },
    grid: {
        border: '1px solid #9ddbd2',
        borderRadius: '3px',
        padding: '10px',
        cursor: 'pointer',
        marginTop: '0px',
        marginLeft: '-10px'
    },
    input: {
        // paddingLeft:'10px'
    }
});
class token extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledBtn: true,
            code: '',
            paymentCode:''
        }
        this.onChange = this.onChange.bind(this);
    }
    async componentDidMount() {
        let data = await this.props.profile(true);
        let { profileResult } = this.props.profileReducer;
        let code = await localStorage.getItem('code');
        let paymentCode = profileResult.profile.payment;
        this.setState({paymentCode});
        if(code !== undefined){
            let verifyCode = this.verifyCode(code, paymentCode);
            if(verifyCode===true){
                this.goToBussiness();
            }
        } 
        
    }
    verifyCode(code,paymentCode){
        if(code === paymentCode){
            return true;
        }else{
            return false;
        }
    }

    async onSubmit() {
        let code = this.state.code;
        let paymentCode = this.state.paymentCode;

        let verifyCode = this.verifyCode(code, paymentCode);
        if(verifyCode===true){
            localStorage.setItem('code',this.state.code); 
            this.goToBussiness();
        }else{
            Swal.fire({
                title: '',
                text: "โค้ดไม่ถูกต้องกรุณาตรวจสอบ",
                icon: 'warning',
                timer: 2000,
                buttons: false,
            });
        }

        
    }
    onChange(event) {
        this.setState({ code: event.target.value });
        if (event.target.value.length >= 1) {
            this.setState({ disabledBtn: false });
        }
    }
    goBack = (route) => {
        this.props.history.goBack();
    };
    goToBussiness() {
        let token = localStorage.getItem('token');
        let site = process.env.REACT_APP_SITE;
        let url = process.env.REACT_APP_BACKEND + `/create-group/index?token=${token}&site=${site}`;
        window.location.href = url;
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header goback={true} route={this.goBack} header='สร้างธุรกิจ' />
                <Grid container>
                    <Grid item md={12} xs={12} style={{ marginTop: '20px' }}>
                        <InputLabel htmlFor="password">ใส่โค้ดเพื่อปลดล๊อกการใช้งาน</InputLabel>
                        <FormControl fullWidth={true}>
                            <InputLabel htmlFor="password">กรอกโค้ด</InputLabel>
                            <Input className={classes.input} id="password" onChange={this.onChange} aria-describedby="my-helper-text" />
                        </FormControl>
                        <Button disabled={this.state.disabledBtn} onClick={this.onSubmit.bind(this)} variant="contained" color="primary" style={{ marginTop: '10px' }}>
                            ยืนยัน
                            </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = ({profileReducer }) => ({
    profileReducer,
});
const mapDispatchToProps = {
    profile
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(token));

