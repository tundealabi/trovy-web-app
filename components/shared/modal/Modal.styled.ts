import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Iconbutton from '@mui/material/IconButton';
import styled from 'styled-components';

const ModalContainer = styled(Dialog)`
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
const ModalActions = styled(DialogActions)`
  /* padding: 0; */
`;
const ModalCloseButton = styled(Iconbutton)``;

export { ModalContainer, ModalActions, ModalCloseButton };
