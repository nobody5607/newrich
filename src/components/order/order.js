import React, {Component} from 'react';
import Header from '../header';
import {withStyles} from '@material-ui/core/styles';
import Menus from "../menus/menus";
import OrderList from "../order-list";

//redux
import { connect } from "react-redux";
import {profile} from "../../actions/profile.action";

const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px',
        marginTop:'80px'
    },
    card:{
      marginTop:'10px'
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

    }
});

class Order extends Component {
    async componentDidMount() {
        let total = false;
        await this.props.profile(total);
        //let {profileResult} = this.props.profileReducer;
    }
    orderDetail = (order_id) => {

        this.props.history.push('/order-detail?id='+order_id);
    };
    render() {
        const {classes} = this.props;
        const {profileFetching,profileResult} = this.props.profileReducer;

        return (
            <div>
                <Header header='Order'/>
                <div className={classes.root}>

                    {profileFetching && <h2 style={{textAlign:'center',color:'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                    {!profileFetching && profileResult !== undefined &&
                    profileResult !== null &&
                    profileResult.order !== null &&
                    profileResult.order.length > 0 &&
                    profileResult.order !== 'error' &&
                    profileResult.order.map((item, index) => {
                        return <OrderList item={item.order} key={index}  onClick={() => this.orderDetail(item.order.id)}  />
                    })}

                    {!profileFetching && profileResult !== undefined &&
                    profileResult !== null &&
                    profileResult.order === null && <h3 style={{textAlign:'center',color:'gray'}}>ยังไม่ Order </h3>}

                </div>
                <Menus/>
            </div>
        );
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    profileReducer,
});
const mapDispatchToProps = {
    profile
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Order));
