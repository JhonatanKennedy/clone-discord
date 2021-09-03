import React from 'react';
import { Container, Messages, InputContainer, InputField } from '../styles/ChannelChatStyles';
import ChannelMessage from './ChannelMessage';

export default function ChannelChat(){
  return(
    <Container>
      <Messages>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
        <ChannelMessage/>
      </Messages>

      <InputContainer>
        <InputField placeholder="Conversarem #chat-livre" />
      </InputContainer>
    </Container>
  );
}