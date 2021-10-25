import styled from 'styled-components';
import AuthButton from '../../../shared/auth_button/AuthButton';

const LoginAuthButtonContainer = styled.div`
  width: 80%;
  margin: 2rem auto 1rem;
`;
const LoginAuthButton = styled(AuthButton)`
  color: #fff;
`;

export { LoginAuthButtonContainer, LoginAuthButton };
