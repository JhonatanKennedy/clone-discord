import React from 'react';
import { Container, Title, UserContainer, UserPhoto } from '../styles/FriendListStyles';

export default function FriendList(){
  return(
    <Container>
      <Title>Disponível - 1</Title>
      <UserContainer>
        <UserPhoto />
        <span>User 1</span>
      </UserContainer>

      <Title>Offline - 18</Title>
      <UserContainer>
        <UserPhoto />
        <span>User 2</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 3</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 4</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 5</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 6</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 7</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 8</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 9</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 10</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 11</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 12</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 13</span>
      </UserContainer>
      <UserContainer>
        <UserPhoto />
        <span>User 14</span>
      </UserContainer>
    </Container>
  );
}

