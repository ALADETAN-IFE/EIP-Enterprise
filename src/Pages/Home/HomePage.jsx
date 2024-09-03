import React from "react";
import {Main, MainBox, MainLeft, LoginChooseButtonHolder,
    LoginButtonHolder, Button, MainRight, LogoHolder
 } from './HomePageStyle'
 import { useNavigate } from 'react-router-dom'

const HomePage = () => {
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
    <Main>
      <MainBox>
        <MainLeft>
          <h1>EIP Enterprise</h1>
          <p>
            This website is a comprehensive set tasks
             focused on maintaining and
            improving the performance 
          </p>
          <LoginButtonHolder>
          <p style={{ alignSelf: "flex-start" }}>Continue as: </p>
            <LoginChooseButtonHolder>
                <Button onClick={EmployeeLoginRoute}>Employee</Button>
                <Button onClick={CompanyLoginRoute}>Company</Button>
            </LoginChooseButtonHolder>
          </LoginButtonHolder>
        </MainLeft>
        <MainRight>
        {/* <LogoHolder></LogoHolder> */}
        </MainRight>
      </MainBox>
    </Main>
  );
};

export default HomePage;
