import EditIcon from '@mui/icons-material/Edit';
import { useSession } from 'next-auth/react';
import { showAuthDialog } from '../../redux/auth_dialog/auth-dialog.slice';
import { useAppDispatch } from '../../redux/hooks';
import {
  DashboardAccountChangePasswordButton,
  DashboardAccountContainer,
  DashboardAccountDetailsBodyText,
  DashboardAccountDetailsContainer,
  DashboardAccountDetailsHeader,
  DashboardAccountDetailsHeaderActionButton,
  DashboardAccountDetailsHeaderText,
} from './DashboardAccount.styled';

const DashboardAccount = () => {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  return (
    session && (
      <DashboardAccountContainer>
        <DashboardAccountDetailsContainer elevation={0}>
          <DashboardAccountDetailsHeader>
            <DashboardAccountDetailsHeaderText>account details</DashboardAccountDetailsHeaderText>
            <DashboardAccountDetailsHeaderActionButton disabled>
              <EditIcon />
            </DashboardAccountDetailsHeaderActionButton>
          </DashboardAccountDetailsHeader>
          <DashboardAccountDetailsBodyText>
            First Name:
            <span style={{ textTransform: 'capitalize' }}>{session.user.firstName}</span>
          </DashboardAccountDetailsBodyText>
          <DashboardAccountDetailsBodyText>
            Last Name:
            <span style={{ textTransform: 'capitalize' }}>{session.user.lastName}</span>
          </DashboardAccountDetailsBodyText>
          <DashboardAccountDetailsBodyText>
            Email:
            <span>{session.user.email}</span>
          </DashboardAccountDetailsBodyText>
          <DashboardAccountDetailsBodyText>
            Phone Number:
            <span>{session.user.phoneNumber}</span>
          </DashboardAccountDetailsBodyText>
          <DashboardAccountChangePasswordButton
            onClick={() => dispatch(showAuthDialog('password-change'))}
          >
            change password
          </DashboardAccountChangePasswordButton>
        </DashboardAccountDetailsContainer>
      </DashboardAccountContainer>
    )
  );
};

export default DashboardAccount;
