import { useState } from 'react';
import { Formik } from 'formik';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import changePasswordSchema from './change-password-form.schema';
import TextField from '../../../shared/text_field/TextField';
import { LoginSignupAuthButton, LoginSignupAuthButtonContainer } from '../../AuthModal.styled';
import { userPasswordChangeHelper } from '../../../../utils/api_helpers/api_user/api-user.helper';
import { useAppDispatch } from '../../../../redux/hooks';
import { activateSnackbar } from '../../../../redux/snackbar/snackbar.slice';
import { resetAuthDialog } from '../../../../redux/auth_dialog/auth-dialog.slice';

const ChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const [disableBtn, setDisableBtn] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const initialValues: {
    current_password: string;
    new_password: string;
    password_confirmation: string;
  } = { current_password: '', new_password: '', password_confirmation: '' };

  return (
    <Formik
      validationSchema={changePasswordSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setFieldError }) => {
        // setDisableBtn(true);
        try {
          const userPasswordChangeResponse = await userPasswordChangeHelper({
            currentPassword: values.current_password,
            newPassword: values.new_password,
          });
          if (userPasswordChangeResponse) {
            dispatch(resetAuthDialog());
            dispatch(
              activateSnackbar({ content: 'Password successfully changed', severity: 'success' })
            );
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          setDisableBtn(false);
          setFieldError('password', err.message);
        }
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            type={showCurrentPassword ? 'text' : 'password'}
            id='current-password'
            label='Current Password'
            variant='filled'
            name='current_password'
            value={values.current_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.current_password && errors.current_password)}
            helperText={touched.current_password && errors.current_password}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    onMouseDown={() => setShowCurrentPassword(!showCurrentPassword)}
                    edge='end'
                  >
                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            type={showNewPassword ? 'text' : 'password'}
            id='new-password'
            label='New Password'
            variant='filled'
            name='new_password'
            value={values.new_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!(touched.new_password && errors.new_password)}
            helperText={touched.new_password && errors.new_password}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    onMouseDown={() => setShowNewPassword(!showNewPassword)}
                    edge='end'
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={1.5} mb={1.5} />
          <TextField
            type={showConfirmNewPassword ? 'text' : 'password'}
            id='password-confirmation'
            label='Confirm New Password'
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
                    aria-label='toggle password visibility'
                    onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                    onMouseDown={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                    edge='end'
                  >
                    {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoginSignupAuthButtonContainer>
            <LoginSignupAuthButton disabled={disableBtn} type='submit' fullWidth>
              change password
            </LoginSignupAuthButton>
          </LoginSignupAuthButtonContainer>
        </form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
