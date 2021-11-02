import { NextPage } from 'next';
import { MouseEvent, useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { getSession, GetSessionParams } from 'next-auth/react';
import AppLayout from '../components/app_layout/Layout';
import {
  DashboardContentContainer,
  DashboardNavigationContainer,
  DashboardPageContainer,
  DashboardNavigationActionButton,
  DashboardNavigationMenu,
  DashboardNavigationItemButton,
  DashboardPageOverviewContainer,
} from '../styles/Dashboard.styled';
import DashboardPortfolio from '../components/dashboard_portfolio/DashboardPortfolio';
import DashboardLoan from '../components/dashboard_loan/DashboardLoan';
import DashboardAccount from '../components/dashboard_account/DashboardAccount';
import GlobalModal from '../components/shared/modal/Modal';

interface handleCurrentViewProps {
  id: string;
  title: string;
  value: string;
}

const Dashboard: NextPage = () => {
  const navigationData = [
    {
      id: 'port12abZY',
      title: 'portfolio',
      value: 'user_portfolio',
    },
    {
      id: 'loan34cdXW',
      title: 'loan',
      value: 'take_loan',
    },
    {
      id: 'account56efVU',
      title: 'account',
      value: 'user_account',
    },
  ];
  const [currentView, setCurrentView] = useState<handleCurrentViewProps>(navigationData[0]);
  const [showNavMenu, setNavMenuStatus] = useState(false);
  const handleShowNavMenu = (ev: MouseEvent<HTMLButtonElement>) => {
    setNavMenuStatus(!showNavMenu);
    ev.stopPropagation();
  };
  const handleCurrentView = (navData: handleCurrentViewProps) => {
    setNavMenuStatus(false);
    setCurrentView(navData);
  };
  const render = (renderView: handleCurrentViewProps['value']) => {
    switch (renderView) {
      case 'user_portfolio':
        return <DashboardPortfolio />;
      case 'take_loan':
        return <DashboardLoan />;
      default:
        return <DashboardAccount />;
    }
  };
  return (
    <AppLayout>
      <DashboardPageContainer>
        <DashboardPageOverviewContainer>
          <DashboardNavigationContainer>
            <ClickAwayListener onClickAway={() => setNavMenuStatus(false)}>
              <div>
                <DashboardNavigationActionButton variant='outlined' onClick={handleShowNavMenu}>
                  {currentView.title}
                </DashboardNavigationActionButton>

                <DashboardNavigationMenu open={showNavMenu}>
                  {navigationData.map((navData) => (
                    <DashboardNavigationItemButton
                      key={navData.id}
                      fullWidth
                      onClick={() => handleCurrentView(navData)}
                    >
                      {navData.title}
                    </DashboardNavigationItemButton>
                  ))}
                </DashboardNavigationMenu>
              </div>
            </ClickAwayListener>
          </DashboardNavigationContainer>
          <DashboardContentContainer>{render(currentView.value)}</DashboardContentContainer>
        </DashboardPageOverviewContainer>
      </DashboardPageContainer>
      <GlobalModal />
    </AppLayout>
  );
};

export const getServerSideProps = async (context: GetSessionParams | undefined) => {
  const session = await getSession(context);
  if (session) {
    return {
      props: { session },
    };
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default Dashboard;
