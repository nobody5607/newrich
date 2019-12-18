import React, {Component} from 'react';
import Header from '../header';
import Menus from "../menus/menus";
import {Card, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px'
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

class MyMember extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Header header='My Member'/>
                    <div className={classes.root}>
                    <div>
                        <div>
                            <div>Total Member</div>
                            <div><h3>50 Members</h3></div>
                        </div>
                        <hr/>
                        <div>
                            OCT 19 New Members
                        </div>
                    </div>
                    <Card className={classes.card}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar className={classes.image}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </ListItemAvatar>
                                <ListItemText  secondary={
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            <Grid container spacing={3}>
                                                <Grid item xs={6}>
                                                    <div>NAME:{"Demo1"}</div>
                                                    <div>ID:{"01001"}</div>
                                                </Grid>
                                                <Grid item xs={6} className={classes.text_right}>
                                                    <div> Member Type</div>
                                                    <div>B2B</div>
                                                </Grid>
                                            </Grid>
                                        </Typography>

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
                                    <ListItemText  secondary={
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            <Grid container spacing={3}>
                                                <Grid item xs={6}>
                                                    <div>NAME:{"Demo1"}</div>
                                                    <div>ID:{"01001"}</div>
                                                </Grid>
                                                <Grid item xs={6} className={classes.text_right}>
                                                    <div> Member Type</div>
                                                    <div>B2B</div>
                                                </Grid>
                                            </Grid>
                                        </Typography>

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
                                    <ListItemText  secondary={
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            <Grid container spacing={3}>
                                                <Grid item xs={6}>
                                                    <div>NAME:{"Demo1"}</div>
                                                    <div>ID:{"01001"}</div>
                                                </Grid>
                                                <Grid item xs={6} className={classes.text_right}>
                                                    <div> Member Type</div>
                                                    <div>B2B</div>
                                                </Grid>
                                            </Grid>
                                        </Typography>

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
                                    <ListItemText  secondary={
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            <Grid container spacing={3}>
                                                <Grid item xs={6}>
                                                    <div>NAME:{"Demo1"}</div>
                                                    <div>ID:{"01001"}</div>
                                                </Grid>
                                                <Grid item xs={6} className={classes.text_right}>
                                                    <div> Member Type</div>
                                                    <div>B2B</div>
                                                </Grid>
                                            </Grid>
                                        </Typography>

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
                                    <ListItemText  secondary={
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            <Grid container spacing={3}>
                                                <Grid item xs={6}>
                                                    <div>NAME:{"Demo1"}</div>
                                                    <div>ID:{"01001"}</div>
                                                </Grid>
                                                <Grid item xs={6} className={classes.text_right}>
                                                    <div> Member Type</div>
                                                    <div>B2B</div>
                                                </Grid>
                                            </Grid>
                                        </Typography>

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
                                    <ListItemText  secondary={
                                        <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            <Grid container spacing={3}>
                                                <Grid item xs={6}>
                                                    <div>NAME:{"Demo1"}</div>
                                                    <div>ID:{"01001"}</div>
                                                </Grid>
                                                <Grid item xs={6} className={classes.text_right}>
                                                    <div> Member Type</div>
                                                    <div>B2B</div>
                                                </Grid>
                                            </Grid>
                                        </Typography>

                                    }
                                    />
                                </ListItem>
                            </CardContent>
                        </Card>
                        <div className={classes.text_center}>
                            <Button size={"large"} fullWidth variant="outlined" color="primary" disableElevation>
                                See all
                            </Button>
                        </div>
                    </div>
                <Menus/>
            </div>
        );
    }
}

export default withStyles(styles)(MyMember);
