import EditIcon from '@mui/icons-material/Edit';
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
  const elevationValue = 0;
  return (
    <DashboardAccountContainer>
      <DashboardAccountDetailsContainer elevation={elevationValue}>
        <DashboardAccountDetailsHeader>
          <DashboardAccountDetailsHeaderText>account details</DashboardAccountDetailsHeaderText>
          <DashboardAccountDetailsHeaderActionButton>
            <EditIcon />
          </DashboardAccountDetailsHeaderActionButton>
        </DashboardAccountDetailsHeader>
        <DashboardAccountDetailsBodyText>
          First Name:
          <span>alabi</span>
        </DashboardAccountDetailsBodyText>
        <DashboardAccountDetailsBodyText>
          Last Name:
          <span>tunde</span>
        </DashboardAccountDetailsBodyText>
        <DashboardAccountDetailsBodyText>
          Email:
          <span>tundealabi4780@gmail.com</span>
        </DashboardAccountDetailsBodyText>
        <DashboardAccountDetailsBodyText>
          Phone Number:
          <span>+2348167229045</span>
        </DashboardAccountDetailsBodyText>
        <DashboardAccountChangePasswordButton>change password</DashboardAccountChangePasswordButton>
      </DashboardAccountDetailsContainer>
    </DashboardAccountContainer>
  );
};

export default DashboardAccount;
