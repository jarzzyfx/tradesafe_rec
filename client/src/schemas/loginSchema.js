import * as yup from 'yup';


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const loginSchema = yup.object().shape({
    email: yup.string().email("must be a valid email").required("this field is required"),
    password: yup.string().min(5).matches(passwordRules, {message:"incorrect password format, try again"}).required("this field is required")
   
})

export default loginSchema;