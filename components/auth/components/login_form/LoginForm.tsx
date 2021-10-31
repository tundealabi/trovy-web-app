import { Formik } from 'formik';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '../../../shared/text_field/TextField';
import loginSchema from './login-form.schema';
import { LoginSignupAuthButton, LoginSignupAuthButtonContainer } from '../../AuthModal.styled';
import { userLoginHelper } from '../../../../utils/api_helpers/api_user/api-user.helper';

const LoginForm = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: { email: string; password: string } = { email: '', password: '' };
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setFieldError }) => {
        setDisableBtn(true);
        try {
          const userEmailResponse: string = await userLoginHelper(values);
          signIn('credentials', {
            email: userEmailResponse,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
          });
        } catch (err: any) {
          setDisableBtn(false);
          setFieldError('password', err.message);
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
        <form noValidate onSubmit={handleSubmit}>
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
            margin='normal'
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
          <LoginSignupAuthButtonContainer>
            <LoginSignupAuthButton disabled={disableBtn} type='submit' fullWidth>
              login
            </LoginSignupAuthButton>
          </LoginSignupAuthButtonContainer>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
