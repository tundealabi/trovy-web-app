import Image from 'next/image';
import {
  AppHeaderNavContainer,
  AppHeaderNavLogoContainer,
  AppHeaderNavToolBar,
} from './AppHeaderNav.styled';

const AppHeaderNav = () => (
  <AppHeaderNavContainer>
    <AppHeaderNavToolBar>
      <AppHeaderNavLogoContainer>
        <Image src='/logo.png' width={100} height={50} layout='intrinsic' />
      </AppHeaderNavLogoContainer>
    </AppHeaderNavToolBar>
  </AppHeaderNavContainer>
);

export default AppHeaderNav;
