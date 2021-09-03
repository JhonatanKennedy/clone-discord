import React from 'react';
import { BsFillMicFill } from 'react-icons/bs'
import { IoMdHeadset } from 'react-icons/io'
import { AiFillSetting } from 'react-icons/ai';
import { Container, UserPhoto, NameContainer, IconContainer } from '../styles/UserInfoStyles';

export default function UserInfo(){
  return(
    <Container>
      <UserPhoto/>

      <NameContainer>
        <b>Jhonatan Kennedy</b>
        <span>#2312</span>
      </NameContainer>

      <IconContainer>
        <BsFillMicFill size={20}/>
        <IoMdHeadset size={20}/>
        <AiFillSetting size={20}/>
      </IconContainer>
    </Container>
  );
}