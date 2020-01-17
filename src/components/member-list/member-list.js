import React, {Component} from 'react';
import {Card, withStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

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

class MemberList extends Component {
    render() {
        const {classes,type,onClick,key} = this.props;
        const {member} = this.props;

        return (
            <div>
               <Card key={key}
                     className={classes.card}
                     onClick={onClick}
                     type={type}>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar id="fixed-image"
                                            style={{marginLeft:'-20px'}}
                                            alt="Founder Image"
                                            src={member !== undefined ? member.avatar_path:""}/>
                                </ListItemAvatar>
                                <ListItemText  secondary={
                                        <Typography style={{color:'#9E9E9E'}} component="span" variant="body2" className={classes.inline} color="textPrimary">
                                            <Grid container spacing={3} style={{marginLeft:'10px',marginTop:'10px'}}>
                                                <Grid item xs={12}>
                                                    <div style={{fontSize:'14pt',color:'#4abdac',fontWeight:'bold'}}>{member !== undefined ? member.name:''}</div>
                                                    {/*<div>ID: {member !== undefined ? member.user_id:''}</div>*/}
                                                    <div style={{fontSize:'8pt'}}>Register date:  {member !== undefined ? member.create_date:''}</div>
                                                    <div style={{fontSize:'8pt'}}>
                                                        Member type: {member !== undefined ? member.member_type :'Non'}
                                                    </div>
                                                </Grid>

                                            </Grid>
                                        </Typography>
                                }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
            </div>
        );
    }
}

export default withStyles(styles)(MemberList);
