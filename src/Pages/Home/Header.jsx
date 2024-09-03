import React, { useState } from 'react'
import styled from 'styled-components'
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLargeLine } from "react-icons/ri";
import './Home.css'
import Headerdown from './Headerdown';
import logo from '/Logo.png'

const Header = () => {
    const [show, setShow]=useState(false)
  return (
    <Headerbdy>
      <Headerbdy2>
        <Logo >
            <img src={logo} alt="" 
            style={{maxWidth: "50px",
             alignSelf: "flex-start", 
            //  background: "black"
             }} />
        </Logo>
        <Nav>
            <Ul>
                <LI>Home</LI>
                <LI>About</LI>
                <LI>Service</LI>
                <LI>Contact</LI>
            </Ul>
            {
                show ? <RiCloseLargeLine className="icon" onClick={()=> setShow(false)}/> :
             
             <TfiMenu className="icon" onClick={()=> setShow(true)}/>
            }
        </Nav>
      </Headerbdy2>
      {
                show ? <Headerdown setShow={setShow}/> :
              null
            }
      
    </Headerbdy>
  )
}

export default Header
export const Headerbdy=styled.div`
 width: 100%;
 height: 9vh;
 display: flex;
 align-items: center;
 justify-content: center;
 background:white;
 color: black;
 position: fixed;
 flex-direction: column;
 z-index: 999;
 @media screen and (max-width:320px) {
    width: 100%;
    height: 8vh;
    position: absolute;
    background: white;
    position: fixed;
    z-index: 99999999999999999999999999;
    top: 0px;
    bottom: 0px;
 }
`
export const Headerbdy2=styled.div`
 width: 95%;
 height: 90%;
 display: flex;
 align-items: center;
 justify-content: center;
//  background: #414040;
@media screen and (max-width:768px) {
    width: 100%;
    display: flex;
 }
`
export const Logo=styled.div`
 width: 30%;
 height: 90%;
 display: flex;
 /* align-items: center; */
 /* justify-content: center; */
 align-self: flex-start;
/* background: #5a2f2f; */
@media screen and (max-width:768px) {
    width: 90%;
    display: flex;
 }
`
export const Nav=styled.nav`
 width: 70%;
 height: 90%;
 display: flex;
 align-items: center;
 justify-content: flex-end;
//  background: #3d6264;
 @media screen and (max-width:768px) {
    width: 40%;
    display: flex;
    padding:20px;
 }
`
export const Ul=styled.ul`
 width: 40%;
 height: 90%;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 /* background: #414040; */
 @media screen and (max-width:320px) {
    width: 100%;
    display: none;
 }
`
export const LI=styled.li`
 width: 95%;
 height: 90%;
 display: flex;
 align-items: center;
 justify-content: space-around;
 /* background: #414040; */
 /* color: white; */
 font-size: 20px;
 color: black;
 font-family: Arial, Helvetica, sans-serif;
 font-weight: 500;
 cursor: pointer;
 transition: all 350ms ease-in-out;
 transform: scale(1);
 &:hover{
    cursor: pointer;
 transition: all 350ms ease-in-out;
 transform: scale(1.08);

 }
`
