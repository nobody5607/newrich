import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

//redux
import {connect} from "react-redux";
import * as actions from "../../actions/member.action";
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme => ({
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
    }
});

class Bussinese extends Component {
    async componentDidMount() {
        this.props.fetchGroup();
    }
    bussineseDetail(id){
        // alert('ID='+id)
       this.props.history.push('/bussinese-detail?id='+id);
    }
    createBussines = (route) => {
        let token = localStorage.getItem('token');
        let site = process.env.REACT_APP_SITE;
        let url = process.env.REACT_APP_BACKEND + `/create-group/index?token=${token}&site=${site}`;
        window.location.href = url;
    };

    render() {
        const {classes} = this.props;
        const {isFetching2, result2, isError2, errMessage2} = this.props.memberReducer;
        return (
            <div style={{marginTop: '15px', fontWeight: 'bold', color: '#9E9E9E'}}>
                <Grid>
                    <Grid item xs={12}>
                        <Grid container>

                            <Grid item md={12} xs={12} style={{marginLeft: '10px'}}>
                                <div><h3>สร้างธุรกิจ</h3></div>
                                <Button variant="outlined" color="primary" onClick={this.createBussines}>
                                    <AddIcon/> สร้างธุรกิจ
                                </Button>

                                {isFetching2 &&
                                <h2 style={{textAlign: 'center', color: 'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                                {isError2 && errMessage2 &&
                                <h2 style={{textAlign: 'center', color: 'rgb(158, 158, 158)'}}>{errMessage2}</h2>}
                                <Grid container >
                                    {!isFetching2 && result2 && result2.map((item, index) => (
                                        <Grid onClick={() => this.bussineseDetail(item.id)}  container item xs={6} key={item.id} className={classes.gridRoot}>
                                            <Grid item xs={12} className={classes.grid} >
                                                <div>{item.name}</div>
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