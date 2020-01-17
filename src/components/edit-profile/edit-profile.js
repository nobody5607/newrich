import React, {Component} from 'react';
import Header from "../header/header";
import {Formik} from "formik";
import Swal from 'sweetalert2';
import {connect} from "react-redux";
import './index.css';
// import {Bootstrap} from 'bootstrap/dist/css/bootstrap.min.css';
import {myProfile, updateProfile} from "../../actions/profile.action";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";

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
                 <div className="container">
                     <div className="row">
                        <div className="col-md-12">
                            <div style={{textAlign:'center',margin:'0 auto'}}>
                                {this.showPreviewImage(values)}
                                <input
                                    type="file"
                                    onChange={e=>{
                                        e.preventDefault();
                                        setFieldValue("file", e.target.files[0]); // for upload
                                        setFieldValue("file_obj",URL.createObjectURL(e.target.files[0])); // for preview image
                                    }}
                                    name="image"
                                    click-type="type1"
                                    className="picupload"
                                    multiple
                                    accept="image/*"
                                    id="files"
                                    style={{ padding: "20px 0" }}
                                />
                            </div>

                        </div>
                         <div className="col-md-12">
                             <label htmlFor="Member Id">Member Id</label>
                             <input
                                 name="member_id"
                                 onChange={handleChange}
                                 value={values.member_id}
                                 className="form-control"
                                 type="text"
                                 id="member_id"
                             />
                         </div>
                         <div className="col-md-12">
                             <label htmlFor="name">Name</label>
                             <input
                                 name="name"
                                 onChange={handleChange}
                                 value={values.name}
                                 className="form-control"
                                 type="text"
                                 id="name"
                             />
                         </div>

                         <div className="col-md-12">
                             <label htmlFor="link">Link</label>
                             <input
                                 name="link"
                                 onChange={handleChange}
                                 value={values.link}
                                 className="form-control"
                                 type="text"
                                 id="link"
                             />
                         </div>
                         <div className="col-md-12">
                             <label htmlFor="tel">Tel</label>
                             <input
                                 name="tel"
                                 onChange={handleChange}
                                 value={values.tel}
                                 className="form-control"
                                 type="text"
                                 id="tel"
                             />
                         </div>
                         <div className="col-md-12">
                             <label >Member Type</label>
                             <select className="form-control" onChange={handleChange}>
                                 <option value="B2B">B2B</option>
                                 <option value="B2C">B2C</option>
                                 <option value="C2C">C2C</option>
                             </select>
                         </div>
                         <div className="col-md-12">
                             <label htmlFor="profile">Profile</label>
                             <textarea
                                 className="form-control"
                                 name="profile"
                                 id="profile"
                                 onChange={handleChange}
                                 rows="5" value={values.profile}>
                             </textarea>
                         </div>
                         <div className="col-md-12">
                             <Button
                                 type="submit"
                                 fullWidth
                                 variant="contained"
                                 color="primary"
                                 id="btn-primary"
                             >
                                 Update
                             </Button>
                         </div>
                     </div>

                 </div>


            </form>

        )
    }

    render() {
        // let {profileResult} = this.props.profileReducer;
        let {result} = this.props.updateprofileReducer;


        return (
            <div>
                <Header header="Update Profile" goback={true} route={this.goBack}/>
                <div style={{marginTop: '100px'}}>
                    <Formik

                        enableReinitialize
                        initialValues={result ? result : {}}
                        onSubmit={(values, {setSubmitting}) => {
                            let formData = new FormData()
                            formData.append("name", values.name);
                            formData.append("member_id", values.member_id);
                            formData.append("member_type", values.member_type);
                            formData.append("tel", values.tel);
                            formData.append("image", values.file);
                            formData.append('profile',values.profile);
                            //console.log(values.file);
                            if (values !== undefined) {
                                this.props.updateProfile(formData);
                                localStorage.setItem('name', values.name);
                                Swal.fire({
                                    title: "",
                                    text: "Update Profile Success",
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

