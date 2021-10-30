import { ReactElement } from 'react';
import AppHeaderNav from '../app_header_nav/AppHeaderNav';

interface AppLayoutProps {
  children: ReactElement | ReactElement[];
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <AppHeaderNav />
    {children}
  </>
);

export default AppLayout;
