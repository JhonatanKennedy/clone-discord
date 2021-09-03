import React from 'react';
import { Button, ButtonAdm } from '../styles/ServerButtonStyles';

export default function ServerButton({isAdm = false}){
  return(
    <>
      {isAdm ? <ButtonAdm/> : <Button/>}
    </>
  );
}