import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

//redux
import {connect} from "react-redux";
import * as actions from "../../actions/member.action";
import {withStyles} from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";



const useStyles = theme => ({
    gridRoot:{
        padding:'10px',
    },
    grid:{
        // border: '1px solid #e4e4e44d',
        cursor: 'pointer',
        padding: '10px',
        marginTop: '0px',
        marginLeft: '-10px',
        borderRadius: '3px',
        textAlign:'center'
        // boxShadow:'2px 5px 5px #dfdce3'
    }
});

class Bussinese extends Component {
    state={
        link:'',
        showBtnCreateBussiness:false
    }
    async componentDidMount() {
        this.props.fetchGroup();
        let profile = await localStorage.getItem('profile');
        profile = JSON.parse(profile);

        if(profile.payment === 0){
            this.setState({
                showBtnCreateBussiness:true
            });
        }else{
            this.setState({
                showBtnCreateBussiness:false
            });
        }
    }
    bussineseDetail(id){
        // alert('ID='+id)
       this.props.history.push('/bussinese-detail?id='+id);
    }
    createBussines = (route) => {

        /*if(this.state.showBtnCreateBussiness === true){
            let token = localStorage.getItem('token');
            let site = process.env.REACT_APP_SITE;
            let url = process.env.REACT_APP_BACKEND + `/create-group/index?token=${token}&site=${site}`;
            window.location.href = url;
        }else{*/
            this.props.history.push('/token');
        //}
        
    };

    render() {
        const {classes} = this.props;
        const {isFetching2, result2, isError2, errMessage2} = this.props.memberReducer;
        return (
            <div style={{marginTop: '15px', fontWeight: 'bold', color: '#9E9E9E'}}>
                <Grid style={{background:'#fff',paddingTop:'10px',marginTop:'-15px',paddingBottom:'50px'}}>
                    <Grid item xs={12}>
                        <Grid container>

                            <Grid item md={12} xs={12} style={{marginLeft: '10px'}}>
                                
                                <div className='row'>
                                    <div className='col-6 text-left'><h3>สร้างธุรกิจ</h3></div>
                                    <div className='col-6 text-right' style={{paddingRight:'25px'}}>
                                        <Button variant="contained" color="primary" onClick={this.createBussines}>
                                            <AddIcon/> สร้างธุรกิจ
                                        </Button>
                                    </div>
                                </div>
                                
                                {isFetching2 &&
                                <h2 style={{textAlign: 'center', color: 'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                                {isError2 && errMessage2 &&
                                <h2 style={{textAlign: 'center', color: 'rgb(158, 158, 158)'}}>{errMessage2}</h2>}
                                
                                <Grid container >
                                    {!isFetching2 && result2 && result2.map((item, index) => (
                                        <Grid onClick={() => this.bussineseDetail(item.id)}
                                              container item xs={3} key={item.id} className={classes.gridRoot}>

                                            <Grid item md={12} xs={12} className={classes.grid} >
                                                <div>
                                                    <Avatar className={classes.imageCenter} id="fixed-image"
                                                            alt="Travis Howard"
                                                            src=''/>
                                                </div>
                                                <div style={{fontSize:'10px'}}>{item.name}</div>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

const mapStateToProps = ({memberReducer}) => ({
    memberReducer,
});
const mapDispatchToProps = {
    ...actions,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Bussinese));