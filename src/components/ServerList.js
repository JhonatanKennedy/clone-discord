import React from 'react';
import ServerButton from './ServerButton';
import { Container, Separator } from '../styles/ServerListStyles';

export default function ServerList(){
  return(
    <Container>
      <ServerButton isAdm={true}/>
      <Separator/>

      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
    </Container>
  );
}