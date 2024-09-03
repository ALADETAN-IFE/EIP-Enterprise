import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'
import NavigationBar from '../Components/NavigationBar/NavigationBar'
import { LayoutBody } from './LayoutStyle'
import AddEmployee from "../Pages/AddEmployee/AddEmployee";
import { useSelector } from "react-redux";
import AddTask from "../Components/AddTask/AddTask";
import toast from 'react-hot-toast';
// import Aos from 'aos';
// import "aos/dist/aos.css"

const Layout3 = () => {
  
    // useEffect(()=>{
    //   Aos.init();
    // },[])
  // const [addEmployee, setaddEmployee] = useState(false)
  const addEmployee = useSelector((state)=> state?.CompanyManagement?.addEmployee)
  const addTask = useSelector((state)=> state?.CompanyManagement?.addTask)
 useEffect(() => {
  console.log(addEmployee, "addEmployeesd,cnsjknsdinsjs")
 })
 const isOnline = navigator.language
 // const isOnline = navigator.userAgent
const isOnline1 = navigator.onLine
console.log(isOnline, "geolocation")
console.log(isOnline1)

 useEffect(() => {
   if (isOnline1 == "true") {
     toast.success("You are now online")
   } else {
     toast.error("You are currently offline")
     // toast.error(isOnline)
   }
 }, [isOnline1])
 
  return (
    <LayoutBody>
      <NavigationBar/>
      <Outlet 
      // setaddEmployee={setaddEmployee} addEmployee={addEmployee}
      />
      {
        addEmployee ? 
        <AddEmployee/>
        : null
      }
       {
        addTask  ?
        <AddTask/>
        : null
      }

    </LayoutBody>
  )
}

export default Layout3