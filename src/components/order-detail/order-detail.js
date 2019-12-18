import React, {Component} from 'react';
import Header from "../header";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Card, withStyles} from "@material-ui/core";
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
    goBack =(route)=> {
        this.props.history.push('/order');
    };
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.content}>
                <Header header="Order Detail" goback={true} route={this.goBack}/>
                <Card className={classes.card}>
                    <CardContent>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar className={classes.image} alt="Travis Howard"
                                        src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                            </ListItemAvatar>
                            <ListItemText primary="Summer BBQ" secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this Wish I could come, but I'm out of town this…"}

                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.btn_right}
                                        color="textPrimary"
                                    >
                                    </Typography>
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(OrderDetail);