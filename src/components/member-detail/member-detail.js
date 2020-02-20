import React, {Component} from 'react';
import Header from "../header";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import {Card, withStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
//redux
import { connect } from "react-redux";
import * as actions from "../../actions/member.action";

const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px'
    },
    card:{
        marginTop:'10px'
    },
    inline: {
        display: 'block',
    },
    image: {
        width: '80px',
        height: '80px',
        marginRight: '15px'

    },
    content:{
        marginTop: '80px'
    },
    paper:{
        textAlign:'center'
    }
});
class MemberDetail extends Component {
     componentDidMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        let id = queryParams.get('id');
        this.props.geMembers(id);
    }

    goBack =(route)=> {
        this.props.history.goBack();
        // /this.props.history.push('/my-member');
    };

    render() {
        const {classes} = this.props;
        const { isFetching, result } = this.props.memberReducer;


        return (
            <div className={classes.content}>
                <Header header="Founder Detail" goback={true} route={this.goBack}/>
                <Card className={classes.card}>
                    {isFetching && <h2 style={{textAlign:'center',color:'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                    {!isFetching && result != null && <div>
                        <CardContent>
                            <Grid container  >
                                <Grid item xs={12} >
                                    <Avatar style={{width:'150px',height:'150px',margin:'0 auto'}} className={classes.image} alt=""
                                            src={result.data.profile!== undefined?result.data.profile.avatar_path:""}/>
                                </Grid>

                                    <Grid item xs={12} style={{textAlign:'center',paddingRight:'10px',marginBottom:"10px",marginTop:"10px"}}>
                                        <h2 style={{fontSize:'20pt',color:'#4abdac',fontWeight:'bold'}}>{result.data.profile !== undefined ? result.data.profile.name : ''}</h2>
                                    </Grid>


                                <Grid item xs={4} style={{textAlign:'right',paddingRight:'12px',marginBottom:'20px'}}>
                                    <div className={classes.paper}>
                                        <div>
                                            <img style={{width:'50px'}} alt="image_logo" src={`${process.env.PUBLIC_URL}/assets/images/id.png`}/>
                                        </div>
                                        <div>{result.data.profile !== undefined ? result.data.profile.member_id : ''}</div>
                                        <div style={{fontSize:"10px"}}>รหัส</div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'right',paddingRight:'12px'}}>
                                    <div className={classes.paper}>
                                        <div>
                                            <img style={{width:'50px'}} alt="image_logo" src={`${process.env.PUBLIC_URL}/assets/images/member.png`}/>
                                        </div>
                                        <div>{this.props.type ? this.props.type :'B2B'}</div>
                                        <div style={{fontSize:"10px"}}>ประเภทผู้ใช้</div>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className={classes.paper}>
                                        <div>
                                            <img style={{width:'50px'}} alt="image_logo" src={`${process.env.PUBLIC_URL}/assets/images/discount.png`}/>
                                        </div>
                                        <div>{(result.data.order !== undefined && result.data.order !== null) ? (result.data.order.totalPrice === undefined)?0:result.data.order.totalPrice : '0'} ฿</div>
                                        <div style={{fontSize:"10px"}}>ส่วนลด</div>
                                    </div>

                                </Grid>
                                <br/><br/><br/>

                                <Grid item xs={4} style={{textAlign:'right',paddingRight:'12px'}}>
                                    <div className={classes.paper}>
                                        <div>
                                            <img style={{width:'50px'}} alt="image_logo" src={`${process.env.PUBLIC_URL}/assets/images/order.png`}/>
                                        </div>
                                        <div>{(result.data.order !== undefined && result.data.order !== null) ? (result.data.order.totalOrder === undefined)?0:result.data.order.totalOrder : '0'} ฿</div>
                                        <div style={{fontSize:"10px"}}>ยอดสั่งซื้อ</div>
                                    </div>
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'right',paddingRight:'12px'}}>
                                    <div className={classes.paper}>
                                        <div>
                                            <img style={{width:'50px'}} alt="image_logo" src={`${process.env.PUBLIC_URL}/assets/images/score.png`}/>
                                        </div>
                                        <div>{(result.data.order && result.data.order.totalScore !== null) ? (result.data.order.totalScore === undefined)?0:result.data.order.totalScore : '0'} PV</div>
                                        <div style={{fontSize:"10px"}}>คะแนน</div>
                                    </div>
                                </Grid>
                                    <Grid item xs={4}>
                                        <div className={classes.paper}>
                                            <div>
                                                <img style={{width:'50px'}} alt="image_logo" src={`${process.env.PUBLIC_URL}/assets/images/coin.png`}/>
                                            </div>
                                            <div>{(result.data.order !== undefined && result.data.order !== null) ? (result.data.order.totalPrice === undefined)?0:result.data.order.totalPrice : '0'} ฿</div>
                                            <div style={{fontSize:"10px"}}>รายรับรวม</div>
                                        </div>

                                    </Grid>


                                <Grid item xs={12} style={{textAlign:'left',paddingRight:'10px',borderTop:'1px solid #8a8a8a2b',marginTop:'20px',paddingTop:'20px'}}>
                                    <div>
                                        {result.data.profile !== undefined && result.data.profile.profile != 'null' ? result.data.profile.profile : ''}
                                    </div>
                                </Grid>

                            </Grid>
                    </CardContent>

                    </div>}


                </Card>
            </div>
        );
    }
}

const mapStateToProps = ({ memberReducer }) => ({
    memberReducer,
});
const mapDispatchToProps = {
    ...actions,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MemberDetail));
