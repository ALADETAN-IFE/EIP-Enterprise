import React from 'react'
import styled from "styled-components";
import {BsPlus } from "react-icons/bs";

const Button = ({title, func, noIcon}) => {
  return (
    <Btn onClick={func}> 
     {
      !noIcon ? 
      <BsPlus size={25} />
      : null
    } {title}</Btn>
  )
}

export default Button

const Btn = styled.button`
   width: 150px;
   min-width: fit-content;
   padding: 10px;
   min-height: 45px;
   background: #0056b3; 
   border-radius: 5px;
   border:none;
   outline:none;
   font-size: 18px;
   display: flex;
   align-items: center;
   justify-content:center;
   color: white;
   cursor: pointer;
`


