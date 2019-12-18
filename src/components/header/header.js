import React, { Component } from 'react';
import './header.css';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
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

    render() {
        const { classes,goback } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={3} className="header">
                    <Grid item sm={2} xs={2} lg={2}>
                        {goback === true && <div className={classes.paper}>
                            <KeyboardBackspaceIcon onClick={this.props.route}/>
                        </div>}
                    </Grid>
                    <Grid item sm={8} xs={8} lg={8}>
                        <div className={classes.paper}>{this.props.header}</div>
                    </Grid>
                </Grid>
                <div className='marginButton40px'></div>
            </div>
        );
    }
}
export default withStyles(styles)(Header);