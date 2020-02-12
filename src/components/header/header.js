import React, { Component } from 'react';
import './header.css';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import { withRouter } from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize:'16pt',
        fontWeight:'bold'
    },
});

class Header extends Component {
    gotoHome=()=>{
        this.props.history.push('/home');
    }
    render() {
        const { classes,goback } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3} className="header">
                    <Grid item sm={2} xs={2} lg={2} style={{color:'#fff',marginTop:'15px'}}>
                        {goback === true && <div className='header-txt'>
                            <KeyboardBackspaceIcon  onClick={this.props.route}/>
                        </div>}
                    </Grid>
                    <Grid item sm={8} xs={8} lg={8} style={{color:'#fff',marginTop:'15px',lineHeight:'30px'}}>
                        <div className='header-txt'>{this.props.header}</div>
                    </Grid>
                    <Grid item sm={2} xs={2} lg={2}>
                        <img alt="image_logo" onClick={this.gotoHome} id="header-logo" src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}/>
                    </Grid>
                </Grid>
                <div className='marginButton40px'></div>
            </div>
        );
    }
}
export default withStyles(styles)(withRouter(Header));
