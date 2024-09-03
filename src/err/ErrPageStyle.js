import styled from "styled-components";
import ErrBg from "../assets/IMG/ErrBg.jpg"


export const ErrMainBody = styled.section`
   width:100%;
   height: 100vh;
   /* background: #8d5a0d; */
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: url(${ErrBg});
background-repeat: no-repeat;
background-size: cover;
/* background-size:100%; */
   background-position: center;
   gap:20px;

   h1{
    color: black; 
    font-size: 90px;
   }
   h4{
    color: black; 
    font-size: 40px;
   }
   button{
    color: white; 
    background-color: black; 
    border: none;
    outline : none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s ease-in;
   }

     & button:hover{
        transform: scale(1.05);
     }
   
`