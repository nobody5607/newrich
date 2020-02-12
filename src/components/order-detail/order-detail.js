import React, {Component} from 'react';
import Header from "../header";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import {Card, withStyles} from "@material-ui/core";

//redux
import { connect } from "react-redux";
import * as actions from "../../actions/order.action";

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
class OrderDetail extends Component {
    async componentDidMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        let id = queryParams.get('id');
        await this.props.getOrderDetail(id);

    }
    goBack =(route)=> {
        this.props.history.push('/order');
    };
    render() {
        const {classes} = this.props;
        const {isFetching, result} = this.props.orderReducer;

        return (
            <div className={classes.content}>
                <Header header="Order Detail" goback={true} route={this.goBack}/>

                {isFetching && <h2 style={{textAlign:'center',color:'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}

                <Card >
                    {!isFetching && result !== undefined &&
                    result !== null &&
                    result !== null &&
                    result.length > 0 &&
                    result !== 'error' &&
                    result.map((item, index) => {
                        return  <CardContent key={index} className={classes.card}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar className={classes.image} alt="Travis Howard"
                                                src={`${process.env.PUBLIC_URL}/assets/images/bag.png`}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={"Order id:"+ item.order_id} secondary={

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            <div>
                                                <div>
                                                    <label>สินค้า: {item.product_name ? item.product_name : ''}</label>
                                                </div>
                                                <div>
                                                    <label>จำนวน: {item.qty ? item.qty : ''} รายการ</label>
                                                </div>
                                                <div>
                                                    <label>ราคาสินค้าต่อรายการ: {item.unit_price ? item.unit_price : ''} ฿</label>
                                                </div>
                                                <div>
                                                    <label>ราคารวม: {item.price ? <label style={{color:"#f7b733"}}>{item.price}</label> : ''} ฿</label>
                                                </div>
                                                <div>
                                                    <label>คะแนน: {item.score ? <label style={{color:"#f7b733"}}>{item.score}</label> : ''} pv</label>
                                                </div>
                                                <div>
                                                    <label>ส่วนลด: {item.percent ? item.percent : ''} ฿</label>
                                                </div>
                                            </div>
                                        </Typography>

                                    }
                                    />
                                </ListItem>
                            <hr id="hr"/>
                            </CardContent>

                    })}
                </Card>
            </div>
        );
    }
}

const mapStateToProps = ({ orderReducer }) => ({
    orderReducer,
});
const mapDispatchToProps = {
    ...actions,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OrderDetail));
