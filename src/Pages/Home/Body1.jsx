import React from 'react'
import styled from 'styled-components'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { Button, LoginButtonHolder, LoginChooseButtonHolder } from './HomePageStyle'
const Body1 = () => {
  const Navigate =  useNavigate()
  const CompanyLoginRoute = () => {
      Navigate(`/login/company`)
      // 
  }
  const EmployeeLoginRoute = () => {
      Navigate(`/login/employee`)
      // 
  }
  return (
    
    <Bodybo>
      <Inner>
        <div className="inner1">
        
        </div>
        <div className="inner2">
        <h4>Streamline your company`s workflow
          <br />
    <p>        with our effcient management app</p>
           </h4>
        </div>
        <div className="inner3">
        <h4>
          Welcome To 
         <p>Eip Enterprise</p>
           </h4>
        </div>
        <div className="inner4">
        <LoginButtonHolder>
          <p style={{ alignSelf: "flex-start" , fontSize: "24px", color: "gainsboro"}}>Continue as: </p>
            <LoginChooseButtonHolder>
                <Button onClick={EmployeeLoginRoute}>Employee</Button>
                <Button onClick={CompanyLoginRoute}>Admin</Button>
            </LoginChooseButtonHolder>
            </LoginButtonHolder>
         {/* <button>Login</button> */}
        </div>
      </Inner>
    </Bodybo>
  )
}

export default Body1
export const Bodybo=styled.div`
 width: 100%;
 height: 90vh;
 background:  url(src/assets/IMG/1.png);
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 margin-top:20px ;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 @media screen and (max-width:320px) {
  width: 100%;
 height: 130vh;
 background:  url(src/assets/IMG/1.png);
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 margin-top:20px ;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 }
`
export const Inner=styled.div`
   width: 100%;
   height:100% ;
   background: #41414150;
   display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 30px;
   
`
