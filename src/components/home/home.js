import React, { Component } from 'react'; 
import Header from '../header';
import Menus from "../menus/menus";
import {Card, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px'
    },
    card: {
        marginTop: '10px'
    },
    marginTop:{
      marginTop:'80px'
    },
    inline: {
        display: 'inline',
    },
    btn_right: {
        textAlign: 'right',
        display: 'block'
    },
    image: {
        textAlign:'center',
        width: '60px',
        height: '60px',
        marginRight: '15px'
    },
    imageCenter: {
        textAlign:'left',
        width:'50px',
        height:'50px'

    },
    text_right:{
        textAlign: 'right'
    },
    text_center:{
        textAlign:'center',
        marginTop: '10px'
    },
    fab:{
        width: '100px',
        height: '100px',
        padding:'10px'
    },
    fabMain:{
        width:'200px',
        height:'200px',
        background:'#fff',
        cursor:'default'
    },
    hr:{
        borderWidth: "2px"
    },
    font16:{
        fontSize:'16pt',
        fontWeight:'bold',
        color:"#565656"
    }
});
class Home extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div >
                <Header header='Home'/>
                <div className={classes.marginTop}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item md={2} xs={4}>
                                    <Avatar className={classes.imageCenter}
                                            alt="Travis Howard"
                                            src="https://img.icons8.com/ultraviolet/80/000000/gallery.png"/>
                                </Grid>
                                <Grid item md={10} xs={8}>
                                    <div className={classes.font16}>Hello,Name</div>
                                    <div>ID:{"01001"}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className={classes.text_right}>
                            <div>Member since</div>
                            <div>10 Jan 19</div>
                        </Grid>
                    </Grid>
                </div>
                <hr className={classes.hr}/>

                <div>รายรับรวม</div>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.text_center}>
                        <Fab className={classes.fabMain} aria-label="add" size={"large"}>
                            <div>
                                <div>ต.ค 2019</div>
                                <div><h1>130,089 B.</h1></div>
                                <div>ดูรายละเอียด</div>
                            </div>
                        </Fab>
                    </Grid>
                    <Grid item xs={12} className={classes.text_right}>
                        <Fab className={classes.fab} color="secondary" aria-label="add" size={"large"}>
                            สั่งสินค้า<br/>เพิ่มเติม
                        </Fab>
                    </Grid>
                </Grid>

                <hr className={classes.hr}/>
                <div>New Members</div>
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
                <Menus/>
            </div>
        );
    }
}
export default withStyles(styles)(Home);