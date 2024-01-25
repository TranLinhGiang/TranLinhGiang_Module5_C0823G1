import { useFormik } from "formik";
import "./SignUp.css";
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
function SignUp(){
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Tên quá ngắn!')
            .max(50, 'Tên quá dài!')
            .required('yêu cầu nhập tên'),
        phone: Yup.string()
            .min(3, 'Số điện thoại quá ngắn!')
            .max(50, 'Số điện thoại quá dài!')
            .required('yêu cầu nhập số điện thoại'),
        email: Yup.string().email('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$').required('yêu cầu nhập email'),
        message: Yup.string()
            .min(4, 'message quá ngắn!')
            .max(50, 'message quá dài!')
            .required('yêu cầu nhập message'),
    });
    
    const formSignUp= useFormik({
        initialValues: {
            name: "",
            email:"",
            phone:"",
            message: ""
        },
      
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values,null,2));
        }
    })
    return(
        <>
          <h1>Contact form</h1>
        <form onSubmit={formSignUp.handleSubmit}>
            <label>Name</label>
        <TextField type="text" name="name" value={formSignUp.values.name} onChange={formSignUp.handleChange} error={formSignUp.touched && formSignUp.errors.name} 
            helperText={formSignUp.touched && formSignUp.errors.name}></TextField><br/><br/>
            <label>Email</label>
        <TextField type="text" name="email" value={formSignUp.values.email} onChange={formSignUp.handleChange} error={formSignUp.touched && formSignUp.errors.email}
            helperText={formSignUp.touched && formSignUp.errors.email}></TextField><br/><br/>
            <label>Phone</label>
        <TextField  name="phone" value={formSignUp.values.passworld} onChange={formSignUp.handleChange} error={formSignUp.touched && formSignUp.errors.phone}  
            helperText={formSignUp.touched && formSignUp.errors.phone}></TextField><br/><br/>
            <label>Message</label>
            <textarea name="message" value={formSignUp.values.message} onChange={formSignUp.handleChange} 
            error={formSignUp.touched && formSignUp.errors.message}></textarea><br/>
        <button type="submit">Đăng ký</button>
        </form>     
        </>
    )
}
export default SignUp;