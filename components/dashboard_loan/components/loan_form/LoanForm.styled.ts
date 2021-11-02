import Button from '@mui/material/Button';
import styled from 'styled-components';

const LoanFormButtonContainer = styled.div`
  width: 80%;
  margin: 2rem auto 1rem;
`;

const LoanFormButton = styled(Button)`
  background-color: #2dd882;
  box-shadow: 0 8px 10px rgba(45, 216, 130, 0.3);
  color: #000;

  :hover {
    background-color: #2dd882;
  }
`;

export { LoanFormButtonContainer, LoanFormButton };
