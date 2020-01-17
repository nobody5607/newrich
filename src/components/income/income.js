import React, {Component} from 'react';
import Header from "../header";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from '@material-ui/icons/Home';
import { Timeline } from 'react-material-timeline';
import Icon  from '@material-ui/core/Icon';
import {withStyles} from "@material-ui/core";
import {getInCome} from "../../actions/income.action";
import {connect} from "react-redux";
import incomeReducer from "../../reducers/income.reducers";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
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
        marginTop: '100px'
    },
});



class Income extends Component {
    state={
        events:[{
            title: 'Oct',
            subheader: '50,000 ฿',
            description: [ 'คะแนน 5000 PV'],
            icon: <Avatar><HomeIcon/></Avatar>,
        }]

    }
    componentDidMount() {
        this.props.getInCome();

    }

    goBack =(route)=> {
        this.props.history.goBack();
    };
    render() {
        const {classes} = this.props;
        const {result,isFetching} = this.props.incomeReducer;

        return (
            <div className={classes.content}>
                <Header header="รายละเอียดรายรับ" goback={true} route={this.goBack}/>
                {!isFetching && result && <Timeline events={result}/>}

            </div>
        );
    }
}

const mapStateToProps = ({ incomeReducer }) => ({
    incomeReducer,
});
const mapDispatchToProps = {
    getInCome
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Income));
