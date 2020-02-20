import React, {Component} from 'react';
import Header from '../header';
import Menus from "../menus/menus";
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
//redux
import {connect} from "react-redux";
import * as actions from "../../actions/member.action";
import MemberGrid from "../member-grid";


const styles = theme => ({
    root: {
        width: '100%',
        paddingTop: '10px',
        marginTop: '20px',
        color: '#9E9E9E'
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
    text_right: {
        textAlign: 'right'
    },
    text_center: {
        textAlign: 'center',
        marginTop: '10px'
    }
});

class MyMember extends Component {
    componentDidMount() {
        this.props.getMemberUrl();
    }

    allMember = () => {
        this.props.history.push('/all-member');
    };
    memberDetail = (id) => {

        this.props.history.push('/member-detail?id=' + id);
    };

    render() {
        const {classes} = this.props;
        const {isFetching, result} = this.props.memberReducer;

        return (
            <div>
                <Header header='Founders'/>
                <div className={classes.root}>
                    <div>
                        <div>
                            <div style={{marginTop: '10px', color: '#4abdac',textAlign:'center'}}><h2>Total Founders</h2></div>

                            <div style={{fontSize: '16pt',textAlign:'left'}}>
                                {
                                    !isFetching && result !== null &&
                                    result.status !== 'error' &&
                                    result.data.length > 0 && result.data.length
                                } Founders
                            </div>
                        </div>
                    </div>
                    {isFetching &&
                    <h2 style={{textAlign: 'center', color: 'rgb(158, 158, 158)'}}>กำลังโหลดข้อมูล...</h2>}
                    {!isFetching && result !== undefined &&
                    result !== null &&
                    result.data.length > 0 &&
                    result.status !== 'error' &&
                    result.data.map((item, index) => {
                        return <MemberGrid
                            key={index}
                            member={item}
                            onClick={() => this.memberDetail(item.user_id)}
                            type={"B2C"}/>
                    })}
                    <div className={classes.text_center}>

                        {!isFetching && result != null &&

                        <Button style={{marginBottom: '100px'}}
                                id="btn-default"
                                onClick={this.allMember}
                                size={"large"}
                                fullWidth
                                variant="outlined"
                                color="default"
                                disableElevation>
                            See all
                        </Button>}
                    </div>
                </div>
                <Menus/>
            </div>
        );
    }
}

const mapStateToProps = ({memberReducer}) => ({
    memberReducer,
});
const mapDispatchToProps = {
    ...actions,
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyMember));
