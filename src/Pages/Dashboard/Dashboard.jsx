import React, { useState, useEffect } from 'react'
import DashboardUp from '../../Components/DashboardUp/DashboardUp'
import DashboardDown from '../../Components/DashboardDown/DashboardDown'
import styled from 'styled-components'
import { MoonLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
// import { closeNavigationBar } from '../../Global/Redux-actions/CompanyManagement';
import Button from '../../Components/Button/Button';
import { setUserDatas } from '../../Global/Redux-actions/CompanyManagement';

const Dashboard = () => {
  const reduxUserDatas = useSelector((state)=> state.CompanyManagement.UserDatas)
  const {userId} = useParams()
    const [wid, setwid] = useState(0)
    const [datas, setdatas] = useState(reduxUserDatas)
    const [name, setname] = useState(0)
    const [loading, setloading] = useState(false)
    const Nav = useNavigate()
    const dispatch = useDispatch()
   
    // console.log(window.innerWidth)
    useEffect(() => {
      setdatas(reduxUserDatas)
        // setwid(window.innerWidth)
    }, )
    const userfullName = useSelector((state) => state?.CompanyManagement?.UserData?.fullName)
    const loadDatas = async ()=>{
      const url = "https://company-management-3iyh.onrender.com/api"       
          setloading(true)
           try {
            const response = await axios.get(`${url}/employee/get-total/${userId}`,)
            console.log(response?.data.data)   
            dispatch(setUserDatas(response?.data))    
            // toast.success(response?.data.message)
          // localStorage.setItem('TypeofUser')
         
          setloading(false)
        } catch (error) {
          setloading(false)
          console.log(error)
          console.log(error?.response.data.message)
          toast.error(error?.response.data.message)
          if(error?.response.data.message == "No Authorization found" || "Your session has timed out. Please log in again."){
            toast.error("Please Login")
            setTimeout(() => {
               Nav(`/`) 
            }, 1200);
          }
        }
    }
    const greetUser = () => { 
      const time = new Date().getHours()
      if ( userfullName == undefined ) {
        if (time >= 6 && time < 12) {
          setname(`Good Morning user 🌅 please login  `)
        }
        else if (time >= 12 && time < 18) {
          setname(`Good Afternoon user ☀️ please login `)
        }
        else if (time >= 0 && time < 6) {
          setname(`Good Night user 🌙 please login `)
        }
        else{
          setname(`Good Evening user 🌑 please login`)
        }
      } else {
        if (time >= 6 && time < 12) {
          setname(`Good Morning ${userfullName} 🔆`)
        }
        else if (time >= 12 && time < 18) {
          setname(`Good Afternoon ${userfullName} ☀️`)
        }
        else if (time >= 0 && time < 6) {
          setname(`Good Night ${userfullName} 🌙`)
        }
        else{
          setname(`Good Evening ${userfullName}  🌑`)
        }
      }
     
    }
    useEffect(() => {
      loadDatas()
    },[])
    useEffect(() => {
      greetUser()
    })
    const totalTask = datas?.data?.map((e)=>{
      return  e.tasks
  })
  const totalTaskReduce = totalTask?.reduce((accumulator, currentValue) => accumulator.length + currentValue.length)
  console.log(totalTask, "totalTask");
  console.log(totalTaskReduce, "totalTaskReduce");
 
  return (
    <MiddleDiv>
      <DashUp>
        <h2>{name}</h2>
        {/* {wid} */}
        <Button title="Add Task"/>
      </DashUp>
      <DashboardUp datas={datas} loading={loading} totalTaskReduce={totalTaskReduce}/>
      <DashboardDown/>  
    </MiddleDiv>
  )
}

export default Dashboard

const DashUp = styled.div`
  width:100%;
  min-height: 55px;
  max-height: 55px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  /* background-color: red; */

  h2{
    font-size: 20px;
  }
`
const MiddleDiv = styled.div`
width:100%;
height: 100vh;

background-color: whitesmoke;
display: flex;
flex-direction: column;
gap:15px;
padding: 10px;
padding-right: 4px;
/* justify-content: c; */
`