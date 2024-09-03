import React, { useState } from 'react'
import styled from 'styled-components'
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeLine } from "react-icons/ri";



const Headerdown = ({setShow}) => {
    // const [show, setShow]=useState(false)
  return (
    <Headerdown1>
       <Headerdown2>
       <Icon1>
       <RiCloseLargeLine style={{color:"black", fontSize:"30px"}} onClick={()=> setShow(false)}/>

       </Icon1>
       <Drop>
      <Nav>
        <Ul>
        <Li>Home</Li>
      
      <Li>About</Li>
      
      <Li>Service</Li>
      <Li>Contact</Li>
      
        </Ul>
      </Nav>
       </Drop>
        </Headerdown2>
    </Headerdown1>
  )
}

export default Headerdown
export const Headerdown1=styled.div`
display: none;
 @media screen and (max-width:328px) {
    width: 100%;
 height: max-content;
 display: flex;
 box-shadow: 0 0  20px solid red;
 background: #ffffff;
 margin-top: -64px;
 position: absolute;
 }
`
export const Headerdown2=styled.div`
 width: 100%;
 height: 50vh;
//  background: #00ff22;
 position: absolute;
`
export const Icon1=styled.div`
 width: 100%;
 height: 20%;
 background: #ffffff;
 display:flex;
 align-items: center;
 justify-content: flex-end;
 padding: 20px;
 /* position: absolute; */
`
export const Drop=styled.div`
 width: 100%;
 height: 77%;
 background: white;
 box-shadow: 0 0 0 20px solid #610000;

 display:flex;
 /* align-items: center; */
 /* justify-content:center ; */
 /* padding: 10px; */
 /* flex-direction: column; */
 position: absolute;
`
export const Li=styled.li`
 width: 100%;
 height: 90%;
//  background: #57575745;
cursor: pointer;
 display:flex;
 border-bottom: 1px solid #57575745;
 /* flex-direction: column/; */
 align-items: center;
 justify-content: flex-start;
 padding: 20px;
 /* position: absolute; */
`
export const Nav =styled.nav`
 width: 100%;
 height: 35%;
 /* background: red; */
 display:flex;
 align-items: center;
 justify-content: center;
//  flex-direction: column;

`
export const Ul=styled.ul`
 width: 100%;
 height: 100%;
//  background: #1d1c1a;
 display:flex;
 align-items: center;
 padding: 10px;
 flex-direction: column;
 justify-content: flex-start;
`

