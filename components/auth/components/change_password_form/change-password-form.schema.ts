import * as Yup from 'yup';

const changePasswordSchema = Yup.object().shape({
  current_password: Yup.string()
    .required('Current password field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Min 0f 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  new_password: Yup.string()
    .required('New password field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Min 0f 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('new_password'), null],
    'Confirm password does not match new password'
  ),
});

export default changePasswordSchema;
