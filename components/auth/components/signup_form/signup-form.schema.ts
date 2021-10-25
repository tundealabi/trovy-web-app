import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z]{3,30}$/,
      'Firstname must contain only alphabets and must be more than 3 characters'
    )
    .required('First name is a required field'),
  last_name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z]{3,30}$/,
      'Lastname must contain only alphabets and must be more than 3 characters'
    )
    .required('Last name is a required field'),
  email: Yup.string().email('Invalid email address').trim().required('Email field is required'),
  user_phone: Yup.string()
    .trim()
    .matches(
      /(^\+234[0-9]{10}$)|^((080|070|081|090)[\d]{8})$/,
      'Phone number must be a valid Nigeria number'
    )
    .required('Phone number is a required field'),
  password: Yup.string()
    .required('Password is a required field')
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Min 0f 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default signupSchema;
