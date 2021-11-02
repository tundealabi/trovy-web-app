/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  AppHeaderNavContainer,
  AppHeaderNavLogoContainer,
  AppHeaderNavToolBar,
  AppHeaderNavUserPresenceContainer,
} from './AppHeaderNav.styled';
import UserPresence from './components/user_presence/UserPresence';

const AppHeaderNav = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading' && !session) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, status]);
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
