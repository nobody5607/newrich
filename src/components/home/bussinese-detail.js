import React, {Component} from 'react';
//redux
import {connect} from "react-redux";
import * as actions from "../../actions/member.action";
import {withStyles} from '@material-ui/core/styles';
import Header from "../header/header";
import { FormControl,Input,InputLabel,Button,Grid } from '@material-ui/core';
import {httpClient} from "../../utils/HttpClient";
import {server} from "../../constants";
import Swal from "sweetalert2";

const useStyles = theme => ({
    content:{
        marginTop:'20px',
    },
    gridRoot:{
        padding:'10px',
    },
    grid:{
        border: '1px solid #9ddbd2',
        borderRadius: '3px',
        padding: '10px',
        cursor: 'pointer',
        marginTop:'0px',
        marginLeft:'-10px'
    },
    input:{
        // paddingLeft:'10px'
    }
});

class BussineseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password : '',
            showForm:'',
            showDetail:'none',
            disabledBtn:true,
            detail:''
        }
        this.onChange = this.onChange.bind(this);
    }
    showDetail(selectedData){
        this.setState({detail:''});
        this.setState({detail:selectedData.detail});
    }
    onChange(event){
        this.setState({password:event.target.value});
        if(event.target.value.length >= 1){
            this.setState({disabledBtn:false});
        }
    }
    async onSubmit(){
        const queryParams = new URLSearchParams(this.props.location.search);
        let id = queryParams.get('id');
        let password = this.state.password;
        // this.props.checkPassword(id, password);

        let result = await httpClient.get(`${server.MEMBER_URL}/group-pass?id=${id}&password=${password}`);
        let {data} = result;
        if(data.status === 'success'){
            console.log('ok')
            this.setState({
                showForm:'none',
                showDetail:'',
            });
        }else{
            Swal.fire({
                title: '',
                text: "กรุณาตรวจสอบรหัสผ่าน",
                icon: 'warning',
                timer: 1000,
                buttons: false,
            });
        }
        console.log(data);
    }
    goBack =(route)=> {
        this.props.history.goBack();
    };
    componentDidMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        let id = queryParams.get('id');
        this.props.fetchGroupDetail(id);
        //console.log('ok')
    }

    render() {
        const {classes} = this.props;
        const {isFetching2, result2, isError2, errMessage2} = this.props.memberReducer;

        return(
            <div>
                <Header goback={true} route={this.goBack} header='สร้างธุรกิจ'/>
                <div className={classes.content}>

                    <Grid container style={{display:this.state.showForm}}>
                        <Grid item md={12} xs={12} style={{marginTop: '20px'}}>
                            <InputLabel htmlFor="password">รหัสผ่าน</InputLabel>
                            <FormControl fullWidth={true}>
                                <InputLabel htmlFor="password">กรอกรหัสผ่าน</InputLabel>
                                <Input className={classes.input} id="password" onChange={this.onChange} aria-describedby="my-helper-text" />
                            </FormControl>
                            <Button disabled={this.state.disabledBtn} onClick={this.onSubmit.bind(this)} variant="contained" color="primary" style={{marginTop: '10px'}}>
                                ยืนยัน
                            </Button>
                        </Grid>
                    </Grid>



                    <Grid style={{display:this.state.showDetail}}>
                        <Grid item xs={12}>
                            <Grid container>

                                <Grid item md={12} xs={12} style={{marginLeft: '10px',marginTop:'20px'}}>
                                    {isFetching2 &&
                                    <h2 style={{textAlign: 'center', color: 'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                                    {isError2 && errMessage2 &&
                                    <h2 style={{textAlign: 'center', color: 'rgb(158, 158, 158)'}}>{errMessage2}</h2>}
                                    <Grid container >
                                        {!isFetching2 && result2 && result2.map((item, index) => (
                                            <Grid onClick={() => this.showDetail(item)}  container item xs={6} key={item.id} className={classes.gridRoot}>
                                                <Grid item xs={12} className={classes.grid} >
                                                    <div>{item.title}</div>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid style={{display:this.state.showDetail}}>
                        <div dangerouslySetInnerHTML={{__html: this.state.detail}} >

                        </div>
                    </Grid>



                </div>
            </div>
        )
    }
}

const mapStateToProps = ({memberReducer}) => ({
    memberReducer,
});
const mapDispatchToProps = {
    ...actions,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(BussineseDetail));