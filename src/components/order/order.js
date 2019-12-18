import React, {Component} from 'react';
import Header from '../header';
import {withStyles} from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menus from "../menus/menus";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px'
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

    orderDetail = (order_id) => {
        this.props.history.push('/order-detail');
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header header='Order'/>
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order1" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order1
                                        </Typography>
                                        {"รายการสินค้า"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="contained" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image} alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order2" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order2
                                        </Typography>
                                        {"demo"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="outlined" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order1" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order1
                                        </Typography>
                                        {"รายการสินค้า"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="contained" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image} alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order2" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order2
                                        </Typography>
                                        {"demo"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="outlined" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order1" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order1
                                        </Typography>
                                        {"รายการสินค้า"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="contained" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image} alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order2" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order2
                                        </Typography>
                                        {"demo"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="outlined" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order1" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order1
                                        </Typography>
                                        {"รายการสินค้า"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="contained" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image} alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order2" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order2
                                        </Typography>
                                        {"demo"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="outlined" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order1" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order1
                                        </Typography>
                                        {"รายการสินค้า"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="contained" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image} alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order2" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order2
                                        </Typography>
                                        {"demo"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="outlined" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order1" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order1
                                        </Typography>
                                        {"รายการสินค้า"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="contained" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image} alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText primary="Order2" secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            Order2
                                        </Typography>
                                        {"demo"}

                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.btn_right}
                                            color="textPrimary"
                                        >

                                            <Button onClick={this.orderDetail} variant="outlined" color="primary"
                                                    align='right'>
                                                Detail
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                </div>
                <Menus/>
            </div>
        );
    }
}

export default withStyles(styles)(Order);