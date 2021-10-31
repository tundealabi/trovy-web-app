/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import {
  AppHeaderNavContainer,
  AppHeaderNavLogoContainer,
  AppHeaderNavToolBar,
  AppHeaderNavUserPresenceContainer,
} from './AppHeaderNav.styled';
import UserPresence from './components/user_presence/UserPresence';

const AppHeaderNav = () => {
  const { data: session, status } = useSession();
  return (
    <AppHeaderNavContainer>
      <AppHeaderNavToolBar>
        <AppHeaderNavLogoContainer>
          <NextLink href='/'>
            <a>
              <Image src='/logo.png' width={100} height={50} layout='intrinsic' />
            </a>
          </NextLink>
        </AppHeaderNavLogoContainer>
        {status === 'authenticated' ? (
          <AppHeaderNavUserPresenceContainer>
            <UserPresence
              firstName={session?.user.firstName as string}
              lastName={session?.user.lastName as string}
            />
          </AppHeaderNavUserPresenceContainer>
        ) : null}
      </AppHeaderNavToolBar>
    </AppHeaderNavContainer>
  );
};

export default AppHeaderNav;
