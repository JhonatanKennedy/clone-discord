import React from 'react';
import { Container, Category, Title, Icon, ChannelsList } from '../styles/ChannelListStyles';
import { AiOutlinePlus } from 'react-icons/ai';
import ChatButton from './ChatButton';


export default function ChannelList(){
  return(
    <Container>
      <Category>
        <Title>Canais de texto</Title>
        <Icon><AiOutlinePlus/></Icon>
      </Category>

      <ChannelsList>
        <ChatButton name='teste'/>
        <ChatButton name='teste'/>
        <ChatButton name='teste'/>
        <ChatButton name='teste'/>
      </ChannelsList>
      
    </Container>
  );
} 