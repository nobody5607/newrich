import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {Formik} from 'formik';
import {login} from "../../actions/login.action";
import Swal from 'sweetalert2';
import {connect} from "react-redux";

import './login.css';
import { server } from "../../constants";
import * as Yup from 'yup';

const styles = theme => ({
    paper: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class Login extends React.Component {
    componentDidMount(){
        if (localStorage.getItem(server.TOKEN_KEY) != null){
            this.props.history.push("/home")
        }
    }
    goHome =()=>{
        this.props.history.push('/home');
    }
    register=()=>{
        this.props.history.push('/register');
    }
    forgot=()=>{
        this.props.history.push('/forgot');
    }

    showForm = ({values, handleChange, handleSubmit, setFieldValue ,errors, touched})=>{
        const {classes} = this.props;
        return (
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="username"
                    autoComplete="email"
                    autoFocus
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && touched.username ? (
                    <div style={{color:'red'}}>{errors.username}</div>
                  ) : null}
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && touched.password ? (
                    <div style={{color:'red'}}>{errors.password}</div>
                ) : null}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    id="btn-primary"
                >
                    Sign In
                </Button>

            </form>


        )
    }
    render() {
        const {classes} = this.props;

        const SignupSchema = Yup.object().shape({
            username: Yup.string().required('Email ต้องไม่เป็นค่าว่าง'),
            password: Yup.string().required('Password ไม่เป็นค่าว่าง'),
        });


        return (
            <div className="page-login" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/bglogin.png)`}}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline/>
                <div className={classes.paper} >
                        <div className="text-center logo">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}/>
                        </div>
                    <Typography component="h1" variant="h5">
                       <span className='text-red'>NEW</span>Rich
                    </Typography>
                    <Formik
                        validationSchema={SignupSchema}
                        initialValues={{username:"",password:""}}
                        onSubmit={(values,{setSubmitting})=>{
                            let formData = new FormData()
                            formData.append("username", values.username);
                            formData.append("password", values.password);
                            this.props.login(formData, this.props.history)
                            setTimeout(()=>{
                                // console.error(this.props.loginReducer.isError);
                                if(this.props.loginReducer.isError === true){
                                    let {errMessage} = this.props.loginReducer;
                                    Swal.fire({
                                        title: '',
                                        text: errMessage,
                                        icon: 'warning',
                                        timer: 2000,
                                        buttons: false,
                                    });
                                }else{
                                    this.goHome();
                                }
                            },1500);
                            setSubmitting(false)
                        }}>
                        { props=> this.showForm(props)}
                    </Formik>
                    <br/>
                    <div className="footer-link">
                        {/*<label className="text-write" style={{textAlign:'center'}}>*/}
                        {/*    <label onClick={this.forgot} > Forgot password?</label>*/}
                        {/*</label>*/}
                        <br/>
                        <label className="text-write">
                            {"Don't have an account?"}
                            <label onClick={this.register} className="text-orange"> Sign Up</label>
                        </label>


                    </div>
                </div>
            </Container>
            </div>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => ({
    loginReducer,
});
const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
