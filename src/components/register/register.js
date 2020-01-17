import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {withStyles} from '@material-ui/core/styles';
import {register} from "../../actions/register.action";
import {Formik} from 'formik';
import Swal from 'sweetalert2';
import {connect} from "react-redux";
import * as Yup from 'yup';
import {server} from "../../constants";
const styles = theme => ({
    select: {
        width:'100%',
        padding:'18px',
        border:'1px solid silver',
        borderRadius:'3px'
    },
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

class Register extends React.Component {
    componentDidMount(){
        if (localStorage.getItem(server.TOKEN_KEY) != null){
            this.props.history.push("/home")
        }
    }
    login = () => {
        this.props.history.push('/login');
    }

    showForm = ({values, handleChange, handleSubmit, setFieldValue ,errors, touched})=>{
        const {classes} = this.props;
        return (
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} style={{display:"none"}}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="member_id"
                            label="รหัสสมาชิก"
                            name="member_id"
                            autoFocus
                            value={values.member_id}
                            onChange={handleChange}
                        />
                        {errors.member_id && touched.member_id ? (
                            <div style={{color:'red'}}>{errors.member_id}</div>
                          ) : null}
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="ชื่อ"
                            name="firstname"
                            autoFocus
                            value={values.firstname}
                            onChange={handleChange}
                        />
                        {errors.firstname && touched.firstname ? (
                            <div style={{color:'red'}}>{errors.firstname}</div>
                          ) : null}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastname"
                            label="นามสกุล"
                            name="lastname"
                            autoFocus
                            value={values.lastname}
                            onChange={handleChange}
                            autoComplete="lastname"
                        />
                        {errors.lastname && touched.lastname ? (
                            <div style={{color:'red'}}>{errors.lastname}</div>
                          ) : null}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoFocus
                            value={values.email}
                            onChange={handleChange}
                            autoComplete="email"
                        />
                        {errors.email && touched.email ? (
                            <div style={{color:'red'}}>{errors.email}</div>
                          ) : null}
                    </Grid>
                    <Grid item xs={12}>
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
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="tel"
                            label="เบอร์โทรศัพท์"
                            name="tel"
                            type="tel"
                            autoComplete="tel"
                            value={values.tel}
                            onChange={handleChange}
                        />
                        {errors.tel && touched.tel ? (
                            <div style={{color:'red'}}>{errors.tel}</div>
                          ) : null}
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="">ประเภทผู้ใช้</label>
                        <select
                            className={classes.select}
                            id="member_type"
                            value={values.member_type}
                            name="member_type"
                            onChange={handleChange}
                        >
                            <option value='B2B'>B2B</option>
                            <option value='B2C'>B2C</option>
                            <option value='C2C'>C2C</option>
                        </select>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    id="btn-primary"
                >
                    สมัครสมาชิก
                </Button>

            </form>
        )
    }
    render() {
        const {classes} = this.props;
        const query = new URLSearchParams(this.props.location.search);
        let link = query.get('link');
        if(link === undefined || link === null){
            link = 'newrich999';
        }

        const SignupSchema = Yup.object().shape({
            member_id: Yup.string().required('รหัสสมาชิกต้องไม่เป็นค่าว่าง'),
            firstname: Yup.string().required('ชื่อต้องไม่เป็นค่าว่าง'),
            lastname: Yup.string().required('นามสกุลต้องไม่เป็นค่าว่าง'),
            email: Yup.string().required('อีเมล์ต้องไม่เป็นค่าว่าง'),
            password: Yup.string().required('รหัสผ่านต้องไม่เป็นค่าว่าง'),
            tel: Yup.string().required('เบอร์โทรศัพท์ต้องไม่เป็นค่าว่าง'),
        });
        return (
            <div>
                <CssBaseline/>
                <div className={classes.paper}>
                    <div className="text-center logo">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}/>
                    </div>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Container>
                        <Formik
                            validationSchema={SignupSchema}
                            initialValues={{member_type:'B2B',tel:'',email:"",password:"",firstname:'',lastname:'',member_id:'member002'}}
                            onSubmit={(values,{setSubmitting})=>{
                                let formData = new FormData()
                                formData.append("email", values.email);
                                formData.append("password", values.password);
                                formData.append("firstname", values.firstname);
                                formData.append("lastname", values.lastname);
                                formData.append("member_id", values.member_id);
                                formData.append("member_type", values.member_type);
                                formData.append("tel", values.tel);
                                formData.append("link", link);

                                this.props.register(formData, this.props.history);
                                setTimeout(()=>{
                                    if(this.props.registerReducer.isError === true){
                                        let {errMessage} = this.props.registerReducer;
                                        Swal.fire({
                                            title: '',
                                            text: errMessage,
                                            icon: 'warning',
                                            timer: 2000,
                                            buttons: false,
                                        });
                                    }else{
                                        let {result} = this.props.registerReducer;
                                        Swal.fire({
                                            title: '',
                                            text: result,
                                            icon: 'success',
                                            timer: 2000,
                                            buttons: false,
                                        });
                                        this.login();
                                    }
                                },1500);
                                setSubmitting(false)
                            }}>
                            { props=> this.showForm(props)}
                        </Formik>
                    </Container>

                </div>
                <Grid className="bg-blue">
                    <Grid item>
                        <Link href="#" onClick={this.login} variant="body2" className="text-write">
                            Already have an account? <label className="text-orange">Sign in</label>
                        </Link>

                    </Grid>

                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ registerReducer }) => ({
    registerReducer,
});
const mapDispatchToProps = {
    register
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register));
