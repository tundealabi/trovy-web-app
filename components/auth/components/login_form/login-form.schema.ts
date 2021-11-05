import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').trim().required('Email field is required'),
  password: Yup.string().required('Password field is required'),
});

export default loginSchema;
