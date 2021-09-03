import React from 'react';
import { Container, Button } from '../styles/ChatButtonStyles'
import { BsHash } from 'react-icons/bs';
import { BsPersonPlusFill } from 'react-icons/bs';

export default function ChatButton({name}){
  return(
    <Container>
      <span>
        <p><BsHash size={28}/>{name}</p> 
        <Button><BsPersonPlusFill size={20}/></Button>
        </span>
    </Container>
  );
} 