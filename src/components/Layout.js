import React from 'react';
import { Grid } from '../styles/LayoutStyles';
import ServerList from '../components/ServerList';
import ServerName from './ServerName';
import ChannelInfo from './ChannelInfo';
import ChannelList from './ChannelList';
import ChannelChat from './ChannelChat';
import UserInfo from './UserInfo';
import FriendList from './FriendList';

export default function Layout(){
  return(
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
      <ChannelChat/>
      <UserInfo/>
      <FriendList/>
    </Grid>
  );
}