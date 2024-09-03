import React from 'react'
import styled from 'styled-components'
import './Body2.css'
const Body2 = () => {
    const Data = [
        {

        }
    ]
  return (
    <Body2bo>
      <div className="body2">
         <div className="innerb1">
          <div className="imgdiv">
          <img src="src/assets/IMG/2.webp" alt="" />

          </div>
          <div className="textdiv">
            <h2>Efficient Task Management</h2>
            <h4>Assign, track, and organize task for your team  with ease</h4>
          </div>
         </div>
         <div className="innerb2">
         <div className="imgdiv2">
          <img src="src/assets/IMG/3.webp" alt="" />

          </div>
          <div className="textdiv2">
            <h2>User-Friendly Interface</h2>
            <h4>Our app is designed for simplicity
            and ease of use for all users</h4>
          </div>
         </div>
         <div className="innerb3">
       <div className="imgdiv3">
          <img src="src/assets/IMG/4.webp" alt="" />

          </div>
          <div className="textdiv3">
            <h2>Flexible Employee Management</h2>
            <h4>Easily add and manage employee profile and permission</h4>
          </div>
         </div>
      </div>
    </Body2bo>
  )
}

export default Body2
export const Body2bo=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240vh;
  margin-top: 0px;
  background: #dadada;
`
