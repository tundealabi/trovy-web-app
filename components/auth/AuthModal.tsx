import CloseIcon from '@mui/icons-material/Close';
import { ReactChild } from 'react';
import { resetAuthDialog, showAuthDialog } from '../../redux/auth_dialog/auth-dialog.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  AuthDialogContainer,
  AuthDialogTitleContainer,
  AuthDialogTitle,
  AuthDialogCloseButton,
  AuthHaveAccount,
} from './AuthModal.styled';
import ChangePasswordForm from './components/change_password_form/ChangePasswordForm';
import LoginForm from './components/login_form/LoginForm';
import SignUpForm from './components/signup_form/SignUpForm';

interface dialogContentType {
  [key: string]: () => ReactChild;
}
interface dialogTitleType {
  [key: string]: string;
}

const AuthDialog = () => {
  const dispatch = useAppDispatch();
  const { isVisible, content } = useAppSelector((state) => state.authDialog);
  const handleCloseAuthDialog = () => dispatch(resetAuthDialog());
  const handleSwitchAuthDialog = () => {
    const contentToDisplay = content === 'login' ? 'signup' : 'login';
    dispatch(showAuthDialog(contentToDisplay));
  };

  const dialogTitle: dialogTitleType = {
    login: 'login',
    signup: 'sign up',
    'password-change': 'change password',
  };
  const dialogContent: dialogContentType = {
    login: () => <LoginForm />,
    signup: () => <SignUpForm />,
    'password-change': () => <ChangePasswordForm />,
  };

  return (
    <AuthDialogContainer open={isVisible}>
      <AuthDialogTitleContainer>
        <AuthDialogTitle>{dialogTitle[content]}</AuthDialogTitle>
        <AuthDialogCloseButton onClick={handleCloseAuthDialog}>
          <CloseIcon />
        </AuthDialogCloseButton>
      </AuthDialogTitleContainer>
      {dialogContent[content]()}
      {content === 'login' || content === 'signup' ? (
        <AuthHaveAccount>
          {content === 'login' ? "Don't have an account" : 'Already have an account?'}{' '}
          <span onClick={handleSwitchAuthDialog} aria-hidden='true'>
            {content === 'login' ? 'sign up' : 'login'}
          </span>
        </AuthHaveAccount>
      ) : null}
    </AuthDialogContainer>
  );
};

export default AuthDialog;
