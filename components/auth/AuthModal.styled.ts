import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import AuthButton from '../shared/auth_button/AuthButton';

const AuthDialogContainer = styled(Dialog)`
  & .MuiDialog-paper {
    width: 100%;
    border-radius: 10px;
    margin: 0;
    padding: 0 2rem 1rem;
  }
  & .MuiDialogContent-root {
    padding: 0;
  }
  @media (min-width: 18.75rem) {
    & .MuiDialog-paper {
      max-width: 100%;
      width: 94%;
    }
  }
  @media (min-width: 23.75rem) {
    & .MuiDialog-paper {
      width: 29rem;
    }
  }
`;
const AuthDialogTitleContainer = styled(DialogTitle)`
  padding: 0;
  margin-top: 1.72rem;
  width: 100%;
  /* border: 1px solid green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthDialogTitle = styled(Typography)`
  text-transform: capitalize;
  /* border: 1px solid green; */
`;
const AuthDialogCloseButton = styled(IconButton)``;
const AuthHaveAccount = styled(Typography)`
  text-align: center;
  & > span {
    text-transform: capitalize;
    cursor: pointer;
  }
`;

const LoginSignupAuthButtonContainer = styled.div`
  width: 80%;
  margin: 2rem auto 1rem;
`;
const LoginSignupAuthButton = styled(AuthButton)`
  color: #fff;
`;

export {
  AuthDialogContainer,
  AuthDialogTitleContainer,
  AuthDialogTitle,
  AuthDialogCloseButton,
  AuthHaveAccount,
  LoginSignupAuthButtonContainer,
  LoginSignupAuthButton,
};
