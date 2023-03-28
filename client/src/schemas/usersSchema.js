import * as yup from 'yup';


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const usersSchema = yup.object().shape({
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    email: yup.string().email("must be a valid email").required("this field is required"),
    password: yup.string().min(5).matches(passwordRules, {message:"incorrect password format, try again"}).required("this field is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "passwords don't match").required("This field is required")
})

export default usersSchema;