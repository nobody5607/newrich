import React, {Component} from 'react';
import Header from "../header/header";
import {Formik} from "formik";
import Swal from 'sweetalert2';
import {connect} from "react-redux";
import './index.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import {myProfile, updateProfile} from "../../actions/profile.action";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import {withStyles} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
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


class EditProfile2 extends Component {
    state={image:'',link:''}

    async componentDidMount() {
        let link = await localStorage.getItem('link');
        let image = await localStorage.getItem('image');
        this.props.myProfile();
        this.setState({image,link});
    }

    goBack = (route) => {
        this.props.history.push('/setting');
    };
    showPreviewImage = values => {
        if (values.file_obj) {
            return <img src={values.file_obj} style={{ height: 100 }} />;
        }else{
            return <img src={this.state.image} style={{ height: 100 }} />;
        }
    };
    showForm = ({values, handleChange, handleSubmit, setFieldValue,errors, touched}) => {
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
                            label="ชื่อ"
                            id="firstname"
                            defaultValue="Small"
                            name="firstname"
                            value={values.firstname}
                            variant="outlined"
                            margin="normal"
                            onChange={handleChange}
                            fullWidth
                        />
                        {errors.firstname && touched.firstname ? (
                            <div style={{color:'red'}}>{errors.firstname}</div>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="นามสกุล"
                            defaultValue="Small"
                            name="lastname"
                            value={values.lastname}
                            variant="outlined"
                            margin="normal"
                            onChange={handleChange}
                            fullWidth
                        />
                        {errors.lastname && touched.lastname ? (
                            <div style={{color:'red'}}>{errors.lastname}</div>
                        ) : null}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="เบอร์โทรศัพท์"
                            defaultValue="Small"
                            name="tel"
                            value={values.tel}
                            variant="outlined"
                            margin="normal"
                            onChange={handleChange}
                            fullWidth
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
        // let {profileResult} = this.props.profileReducer;
        let {result} = this.props.updateprofileReducer;
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
                <Header header="Update Profile" goback={true} route={this.goBack}/>
                <div style={{marginTop: '100px'}}>
                    <Formik
                        validationSchema={SignupSchema}
                        enableReinitialize
                        initialValues={result ? result : {}}
                        onSubmit={(values, {setSubmitting}) => {
                            let formData = new FormData()
                            formData.append("name", values.name);
                            formData.append("member_id", values.member_id);
                            formData.append("member_type", values.member_type);
                            formData.append("tel", values.tel);
                            formData.append("image", values.file);
                            //console.log(values.file);
                            if (values !== undefined) {
                                this.props.updateProfile(formData);
                                localStorage.setItem('name', values.name);
                                Swal.fire({
                                    title: "",
                                    text: "แก้ไขโปรไฟล์สำเร็จ",
                                    icon: 'success',
                                    timer: 1000,
                                    buttons: false,
                                });
                                setTimeout(()=>{
                                    this.goBack();
                                },1500);
                            }
                            setSubmitting(false)
                        }}>
                        {props => this.showForm(props)}
                    </Formik>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({profileReducer,updateprofileReducer}) => ({
    profileReducer,
    updateprofileReducer
});
const mapDispatchToProps = {
    myProfile,
    updateProfile
}
// export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditProfile2));
