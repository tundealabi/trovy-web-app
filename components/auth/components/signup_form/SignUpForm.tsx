import { Formik } from 'formik';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signIn } from 'next-auth/react';
import TextField from '../../../shared/text_field/TextField';
import signupSchema from './signup-form.schema';
import init from './signup-form.utils';
import { LoginSignupAuthButton, LoginSignupAuthButtonContainer } from '../../AuthModal.styled';
import { userSignupHelper } from '../../../../utils/api_helpers/api_user/api-user.helper';

const SignUpForm = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Formik
      validationSchema={signupSchema}
      initialValues={init}
      onSubmit={async (values, { setFieldError }) => {
        setDisableBtn(true);
        try {
          // console.log('values',values)
          const {
            first_name: firstName,
            last_name: lastName,
            email,
            user_phone: phoneNumber,
            password,
          } = values;
          const userEmailResponse: string = await userSignupHelper({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
          });
          signIn('credentials', {
            email: userEmailResponse,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
          });
        } catch (err: any) {
          setDisableBtn(false);
          setFieldError('password_confirmation', err.message);
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            type='text'
            id='user-first-name'
            label='First Name'
            variant='filled'
            name='first_name'
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.first_name && errors.first_name)}
            helperText={touched.first_name && errors.first_name}
            fullWidth
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            type='text'
            id='user-last-name'
            label='Last Name'
            variant='filled'
            name='last_name'
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.last_name && errors.last_name)}
            helperText={touched.last_name && errors.last_name}
            fullWidth
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            type='email'
            id='user-email'
            label='Email'
            variant='filled'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            fullWidth
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]{11}' }}
            id='user-phone'
            label='Phone Number'
            variant='filled'
            name='user_phone'
            value={values.user_phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.user_phone && errors.user_phone)}
            helperText={touched.user_phone && errors.user_phone}
            fullWidth
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            type={showPassword ? 'text' : 'password'}
            id='user-password'
            label='Password'
            variant='filled'
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleShowPassword}
                    onMouseDown={handleShowPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            type={showConfirmPassword ? 'text' : 'password'}
            id='user-confirm-password'
            label='Confirm Password'
            variant='filled'
            name='password_confirmation'
            value={values.password_confirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.password_confirmation && errors.password_confirmation)}
            helperText={touched.password_confirmation && errors.password_confirmation}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle confirm password visibility'
                    onClick={handleShowConfirmPassword}
                    onMouseDown={handleShowConfirmPassword}
                    edge='end'
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoginSignupAuthButtonContainer>
            <LoginSignupAuthButton disabled={disableBtn} type='submit' fullWidth>
              sign up
            </LoginSignupAuthButton>
          </LoginSignupAuthButtonContainer>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
