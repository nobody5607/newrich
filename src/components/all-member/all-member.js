import React, {Component} from 'react';
import Header from '../header';
import {withStyles} from "@material-ui/core";
import MemberList from "../member-list";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './all-member.css';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//redux
import { connect } from "react-redux";
import * as actions from "../../actions/allmember.action";
import MemberGrid from "../member-grid";
const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px',
        marginTop:'80px',
        color:'#9E9E9E'
    },
    card: {
        marginTop: '10px'
    },
    inline: {
        display: 'inline',
    },
    btn_right: {
        textAlign: 'right',
        display: 'block'
    },
    image: {
        width: '60px',
        height: '60px',
        marginRight: '15px'
    },
    text_right:{
        textAlign: 'right'
    },
    text_center:{
        textAlign:'center',
        marginTop: '10px'
    }
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

class AllMember extends Component {
    componentDidMount() {
        console.info('getMembers');
        this.props.getMemberByType("B2B");
    }

    state = {
        value: 0,
    };
    goBack =(route)=> {
        this.props.history.push('/my-member');
    };
    handleChange = (event, value) => {

        let type = "B2B";
        if(value === 1){
            type = "B2C";
        }else if(value === 2){
            type = "C2C";
        }
        this.setState({value});
        this.props.getMemberByType(type);
    };
    memberDetail =(id)=> {

        this.props.history.push('/member-detail?id='+id);
    };
    render() {
        const {classes} = this.props;
        const {value} = this.state;
        const { isFetching, members,isError } = this.props.allmemberReducer;


        return (
            <div>
                <Header header='All Founder' goback={true} route={this.goBack}/>
                <div className={classes.root}>
                    <Tabs
                        className="tab_primary"
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="fullWidth">
                        <Tab label="B2B" {...a11yProps(0)} />
                        <Tab label="B2C" {...a11yProps(1)} />
                        <Tab label="C2C" {...a11yProps(2)} />
                    </Tabs>

                    <div>
                        <TabPanel className="" value={value} index={0}>
                            {isFetching && <h2 style={{textAlign:'center',color:'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                            {!isFetching && !isError && members != null && members.data.map((res,index)=>{
                                return <MemberGrid
                                    key={index}
                                    member={res}
                                    onClick={() => this.memberDetail(res.user_id)} type={"B2C"}/>
                            })}

                        </TabPanel>
                        <TabPanel value={value} index={1} >
                            {isFetching && <h2 style={{textAlign:'center',color:'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                            {!isFetching && !isError && members != null && members.data.map((res,index)=>{
                                return <MemberGrid
                                    key={index}
                                    member={res}
                                    onClick={() => this.memberDetail(res.user_id)} type={"B2C"}/>
                            })}
                        </TabPanel>
                        <TabPanel value={value} index={2} >
                            {isFetching && <h2 style={{textAlign:'center',color:'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                            {!isFetching && !isError && members != null && members.data.map((res,index)=>{
                                return <MemberGrid
                                    key={index}
                                    member={res}
                                    onClick={() => this.memberDetail(res.user_id)} type={"C2C"}/>
                            })}
                        </TabPanel>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ allmemberReducer }) => ({
    allmemberReducer,
});
const mapDispatchToProps = {
    ...actions,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AllMember));
