import React from 'react';
import { Container, UserButton, TextArea, UserPhoto } from '../styles/ChannelMessageStyles';

export default function ChannelMessage(){
  return(
    <Container>
      <UserButton/>
      <TextArea>
        <UserPhoto>Teste <span>12/12/12</span></UserPhoto>
        <p>isso é uma mensagem</p>
      </TextArea>
    </Container>
  );
}