import React, {Component} from 'react';
import {Card, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';

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
class OrderList extends Component {


    render() {
        const {classes} = this.props;
        const {order,create_date,score,id} = this.props.item;
         
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar className={classes.image}
                                        alt="Travis Howard"
                                        src={`${process.env.PUBLIC_URL}/assets/images/bag.png`}/>
                            </ListItemAvatar>
                            <ListItemText>

                                <div style={{fontWeight:'bold'}}>{"Order id:"+ id}</div>
                                <div style={{fontSize:'12px'}}>วันที่: {create_date}</div>
                                <div>{"ยอดสั่งซื้อ"} <label style={{color:"#f7b733"}}>{order}฿</label></div>
                                <div>{"คะแนน"} <label style={{color:"#f7b733"}}>{score} PV</label></div>
                                <div className={classes.btn_right}>
                                    <Button id="btn-default" onClick={this.props.onClick}
                                            variant="contained" color="default"
                                            align='right'>
                                        Detail
                                    </Button>
                                </div>

                            </ListItemText>

                        </ListItem>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(OrderList);
