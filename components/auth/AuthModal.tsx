import CloseIcon from '@mui/icons-material/Close';
import { resetAuthDialog, showAuthDialog } from '../../redux/auth_dialog/auth-dialog.slice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  AuthDialogContainer,
  AuthDialogTitleContainer,
  AuthDialogTitle,
  AuthDialogCloseButton,
  AuthHaveAccount,
} from './AuthModal.styled';
import LoginForm from './components/login_form/LoginForm';
import SignUpForm from './components/signup_form/SignUpForm';

const AuthDialog = () => {
  const dispatch = useAppDispatch();
  const { isVisible, content } = useAppSelector((state) => state.authDialog);
  const handleCloseAuthDialog = () => dispatch(resetAuthDialog());
  const handleSwitchAuthDialog = () => {
    const contentToDisplay = content === 'login' ? 'signup' : 'login';
    dispatch(showAuthDialog(contentToDisplay));
  };
  return (
    <AuthDialogContainer open={isVisible}>
      <AuthDialogTitleContainer>
        <AuthDialogTitle>{content === 'login' ? 'login' : 'sign up'}</AuthDialogTitle>
        <AuthDialogCloseButton onClick={handleCloseAuthDialog}>
          <CloseIcon />
        </AuthDialogCloseButton>
      </AuthDialogTitleContainer>
      {content === 'login' ? <LoginForm /> : <SignUpForm />}
      <AuthHaveAccount>
        Already have an account?{' '}
        <span onClick={handleSwitchAuthDialog} aria-hidden='true'>
          {content === 'login' ? 'sign up' : 'login'}
        </span>
      </AuthHaveAccount>
    </AuthDialogContainer>
  );
};

export default AuthDialog;
