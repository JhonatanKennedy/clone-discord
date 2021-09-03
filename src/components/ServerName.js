import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { Container, Title, Button } from '../styles/ServerNameStyles';

export default function ServerName(){
  return(
    <Container>
      <Title>Server teste</Title>
      <Button><IoIosArrowDown/></Button>
    </Container>
  );
}