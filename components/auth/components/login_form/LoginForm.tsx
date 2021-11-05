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
import {
  userLoginHelper,
  userVerifyAuthTokenHelper,
} from '../../../../utils/api_helpers/api_user/api-user.helper';

const LoginForm = () => {
  const [disableBtn, setDisableBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [sendingAuthToken, setSendingAuthToken] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [userInfo, setUserInfo] = useState({ userId: '', userEmail: '' });
  const [tokenFieldHelperText, setTokenFieldHelperText] = useState(
    'Enter token sent to your email.'
  );
  const initialValues: { email: string; password: string } = { email: '', password: '' };
  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleVerifyUserToken = async () => {
    const isTokenVerified = await userVerifyAuthTokenHelper({
      userId: userInfo.userId,
      userToken: authToken,
    });
    if (isTokenVerified) {
      signIn('credentials', {
        email: userInfo.userEmail,
        callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
      });
    } else {
      setTokenFieldHelperText('Invalid token.');
    }
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setFieldError }) => {
        // setDisableBtn(true);
        try {
          const userLoginResponse: { userId: string; email: string } = await userLoginHelper(
            values
          );
          if (userLoginResponse) {
            //       signIn('credentials', {
            //   email: userLoginResponse.email,
            //   callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
            // });
            setUserInfo({ userId: userLoginResponse.userId, userEmail: userLoginResponse.email });
            setSendingAuthToken(true);
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          setDisableBtn(false);
          setFieldError('password', err.message);
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
        <>
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
              disabled={sendingAuthToken}
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
              disabled={sendingAuthToken}
            />
            {sendingAuthToken ? (
              <>
                <Box mt={1.5} mb={1.5} />
                <TextField
                  type='text'
                  id='user-token'
                  label='Token'
                  variant='filled'
                  value={authToken}
                  onChange={(ev) => setAuthToken(ev.target.value)}
                  error={!!(touched.email && errors.email)}
                  helperText={tokenFieldHelperText}
                  fullWidth
                  margin='normal'
                />
              </>
            ) : null}
            <LoginSignupAuthButtonContainer>
              {authToken.trim().length !== 6 ? (
                <LoginSignupAuthButton disabled={disableBtn} type='submit' fullWidth>
                  {sendingAuthToken ? 'resend token' : 'login'}
                </LoginSignupAuthButton>
              ) : null}
            </LoginSignupAuthButtonContainer>
          </form>
          {authToken.trim().length === 6 ? (
            <LoginSignupAuthButton
              disabled={disableBtn}
              type='button'
              fullWidth
              onClick={handleVerifyUserToken}
            >
              verify
            </LoginSignupAuthButton>
          ) : null}
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
