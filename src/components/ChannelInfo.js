import React from 'react';
import { Container, Icon, Title, Separator, Text } from '../styles/ChannelInfoStyles';
import { BsHash } from 'react-icons/bs';

export default function ChannelInfo(){
  return(
    <Container>
      <Icon>
        <BsHash/>
      </Icon>
      <Title>Chat-Livre </Title>
      <Separator/>
      <Text>Canal de bosta</Text>
    </Container>
  );
} 