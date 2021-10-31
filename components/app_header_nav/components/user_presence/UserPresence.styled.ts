import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const UserPresenceContainer = styled(Box)`
  position: relative;
`;

const UserPresenceButton = styled(Button)`
  background-color: transparent;
  color: #000;

  :hover {
    background-color: transparent;
  }
`;

const UserPresenceAvatar = styled(Avatar)``;

const UserPresenceMenu = styled(Paper)<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  /* background-color: red; */
  position: absolute;
  z-index: 999;
  /* min-width: fit-content; */
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const UserPresenceMenuItem = styled(Button)`
  color: #000;
`;

export {
  UserPresenceContainer,
  UserPresenceButton,
  UserPresenceAvatar,
  UserPresenceMenu,
  UserPresenceMenuItem,
};
