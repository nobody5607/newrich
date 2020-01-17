import React, {Component} from 'react';
import Header from "../header/header";
import {Formik} from "formik";
import Swal from "sweetalert2";
import {changePassword} from "../../actions/profile.action";
import {connect} from "react-redux";
import * as Yup from 'yup';
class ChangePassword extends Component {
    goBack =(route)=> {
        this.props.history.push('/setting');
    };
    showForm = ({values, handleChange, handleSubmit, setFieldValue,errors, touched, validateField, validateForm}) => {
        return (
            <form
                className="form-horizontal"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="password">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input

                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            className="form-control"
                            type="password"
                            autoFocus={true}
                        />
                        {errors.password && touched.password && <div className="error">{errors.password}</div>}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="new_password">
                        New Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="new_password"
                            onChange={handleChange}
                            value={values.new_password}
                            className="form-control"
                            type="password"
                        />
                        {errors.new_password && touched.new_password && <div className="error">{errors.new_password}</div>}
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="confirm_password">
                        Confirm Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="confirm_password"
                            onChange={handleChange}
                            value={values.confirm_password}
                            className="form-control"
                            type="password"
                        />
                        {errors.confirm_password && touched.confirm_password && <div className="error">{errors.confirm_password}</div>}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary pull-right" id="btn-primary">
                    Change
                </button>
            </form>

        )
    }
    render() {
        return (
            <div>
                <Header header="Change Password" goback={true} route={this.goBack}/>
                <div style={{marginTop: '100px'}}>
                    <Formik

                        initialValues={{password:'',new_password:'',confirm_password:''}}
                        validationSchema={Yup.object().shape({
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('Password is required'),
                            new_password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('New Password is required'),
                            confirm_password:  Yup.string()
                                .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
                                .required('Confirm Password is required')
                        })}
                        onSubmit={(values, {setSubmitting}) => {

                            //console.log(values);
                            if (values !== undefined) {
                                this.props.changePassword(values);
                                // localStorage.setItem('name', values.name);
                                Swal.fire({
                                    title: "",
                                    text: "เปลี่ยนรหัสผ่านสำเร็จ",
                                    icon: 'success',
                                    timer: 1000,
                                    buttons: false,
                                });
                                this.goBack();
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

const mapStateToProps = ({updateprofileReducer}) => ({
    updateprofileReducer
});
const mapDispatchToProps = {
    changePassword
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
