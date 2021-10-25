import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').trim().required('Email field is required'),
  password: Yup.string()
    .required('Password field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Min 0f 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
});

export default loginSchema;
