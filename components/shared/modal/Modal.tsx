import CloseIcon from '@mui/icons-material/Close';
import { ReactChild } from 'react';
import { resetGlobalModal } from '../../../redux/global_modal/global-modal.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import LoanForm from '../../dashboard_loan/components/loan_form/LoanForm';
import { ModalActions, ModalCloseButton, ModalContainer } from './Modal.styled';

interface globalModalContentProps {
  [key: string]: () => ReactChild;
}

const globalModalContent: globalModalContentProps = {
  take_loan: () => <LoanForm />,
};

const GlobalModal = () => {
  const dispatch = useAppDispatch();
  const { isVisible, content } = useAppSelector((state) => state.globalModal);
  const handleCloseModal = () => dispatch(resetGlobalModal());
  return (
    <ModalContainer aria-labelledby='transition-modal-title' open={isVisible}>
      <ModalActions>
        <ModalCloseButton onClick={handleCloseModal}>
          <CloseIcon />
        </ModalCloseButton>
      </ModalActions>
      {globalModalContent[content]()}
    </ModalContainer>
  );
};

export default GlobalModal;
