import React from 'react'
import {Main, MainBox, MainLeft, LoginChooseButtonHolder,
    LoginButtonHolder, Button, MainRight, LogoHolder
 } from '../Home/HomePageStyle'
const AboutPage = () => {
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
              <Button>Employee</Button>
              <Button>Company</Button>
          </LoginChooseButtonHolder>
        </LoginButtonHolder>
      </MainLeft>
      <MainRight>
      <LogoHolder></LogoHolder>
      </MainRight>
    </MainBox>
  </Main>
  )
}

export default AboutPage