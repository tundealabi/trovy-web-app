import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import IUserPresence from './user-presence.interface';
import stringAvatar from './user-presence.utils';
import {
  UserPresenceAvatar,
  UserPresenceButton,
  UserPresenceContainer,
  UserPresenceMenu,
  UserPresenceMenuItem,
} from './UserPresence.styled';

const UserPresence = ({ firstName, lastName }: IUserPresence) => {
  const router = useRouter();
  const [showUserPresenceMenu, setUserPresenceMenu] = useState(false);
  return (
    <UserPresenceContainer>
      <UserPresenceButton
        aria-controls='navbar-loggedin-dropdown button'
        aria-haspopup='true'
        variant='contained'
        startIcon={<UserPresenceAvatar {...stringAvatar(`${firstName} ${lastName}`)} />}
        endIcon={showUserPresenceMenu ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        onClick={() => setUserPresenceMenu(!showUserPresenceMenu)}
      >
        {lastName}
      </UserPresenceButton>
      <UserPresenceMenu open={showUserPresenceMenu}>
        <UserPresenceMenuItem
          type='button'
          onClick={async () => {
            setUserPresenceMenu(false);
            router.push('/dashboard');
          }}
        >
          dashboard
        </UserPresenceMenuItem>
        <UserPresenceMenuItem
          type='button'
          onClick={async () => {
            const { url } = await signOut({
              redirect: false,
              callbackUrl: '/',
            });
            router.push(url);
          }}
        >
          log out
        </UserPresenceMenuItem>
      </UserPresenceMenu>
    </UserPresenceContainer>
  );
};

export default UserPresence;
