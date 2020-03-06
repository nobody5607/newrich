import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Bussinese extends Component {
    createBussines = (route) => {
        let token = localStorage.getItem('token');
        let url = process.env.REACT_APP_BACKEND+`/create-group/index?token=${token}`;
        window.location.href=url;
    };
    render() {
        return (
            <div style={{marginTop:'15px',fontWeight:'bold',color:'#9E9E9E'}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>

                            <Grid item md={9} xs={10} >
                                <div className="txt-new-founder" onClick={this.createBussines}>
                                    สร้างธุรกิจ
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default Bussinese;