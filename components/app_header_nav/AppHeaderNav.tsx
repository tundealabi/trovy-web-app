/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
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
        <NextLink href='/'>
          <a>
            <Image src='/logo.png' width={100} height={50} layout='intrinsic' />
          </a>
        </NextLink>
      </AppHeaderNavLogoContainer>
    </AppHeaderNavToolBar>
  </AppHeaderNavContainer>
);

export default AppHeaderNav;
