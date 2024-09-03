import React, { useState, useEffect } from "react";
import {
  NavigationBarMainBody,
  NavigationBarMainBodyWrapper,
  NavigationBarLogoWrapper,
  NavigationBarLogoHolder,
  NavigationBarLogo,
  CloseNavigationBar,
  NavigationRoutBar,
  NavigationRoutBarWrapper,
  LogoutBtn
} from "./NavigationBarStyle";
import { FaClosedCaptioning } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { GrDashboard } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { BiMenu, BiTask, BiX } from "react-icons/bi";
import { MdNoAccounts } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, setNavigationBar, setUserData } from "../../Global/Redux-actions/CompanyManagement";
import { PiSignOutBold } from "react-icons/pi"
// import { toast } from "react-toastify";
import axios from "axios";
// import toast, { Toaster } from 'react-hot-toast';

const NavigationBar = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
    const NavBarshow = useSelector((state) => state?.CompanyManagement?.NavBarvisibilty)
    
    const setNavBarshow = () => {
      dispatch(setNavigationBar())
    
    }
    
    const adminOrNot = useSelector((state) => state?.CompanyManagement?.UserData)
    const adminId = useSelector((state) => state?.CompanyManagement?.UserData?._id)

    const [NavBar, setNavBar] = useState([
      {
          Icon: MdSpaceDashboard,
          Text: "Dashboard",
          to: `/eip/dashboard/${adminId}`
      },
      {
          Icon: BsPerson,
          Text: "Employee",
          to: `/eip/employee/${adminId}`
      },
      // {
      //     Icon: BiTask,
      //     Text: "Task",
      //     to: `/eip/task`
      // },
      // {
      //     Icon: IoPersonCircleSharp,
      //     Text: "Profile",
      //     to: `/eip/profile/${adminId}`
      // },
  ])
 // useEffect(() => {
  //   const isOnline = navigator.clipboard
  //   const isOnline1 = navigator.onLine
  //   console.log(isOnline,"isOnline")
  //   console.log(isOnline1, "isOnline1")  
  // }, )

  

  // console.log(adminOrNot, "isOnline")

  const keyProp = Object?.keys(adminOrNot)
    useEffect(() => {
      if(keyProp.includes("isAdmin")){
        setNavBar(NavBar)
      }
       if(keyProp.includes("employer")){
        // const keyProp1 = Object.keys(NavBar[0])
      // console.log();
        const filt = NavBar.filter((e)=> e.Text == "Employee" && e.Text !== "Dashboard"  )
        setNavBar(filt)
      }

    }, [])

    const logOut = async () => {
       const url = "https://company-management-3iyh.onrender.com/api"
       console.log(adminId)
      try {
        const UserData = {
          userId: adminId
        }
      
        const response = await axios.post(`${url}/log-out/${adminId}`, UserData)
              console.log(response)
              console.log(response?.data)
              console.log(response?.data.data)
              toast.success(response?.data.message)
              dispatch(logOutUser())
              setTimeout(() => {
                if(keyProp.includes("isAdmin")){
                  Navigate(`/login/company`)
              }
               if(keyProp.includes("employer")){
                Navigate(`/login/employee`)
              }
              }, 1000);
              
      } catch (error) {
      
        console.log(error)
        console.log(error?.message)
        console.log(error?.response?.data)
        console.log(error?.response?.data?.message)
        toast.error(error?.message)
        toast.error(error?.response?.data?.message)
        if(error?.response?.status== 401){
          setTimeout(() => {
            if(keyProp.includes("isAdmin")){
              Navigate(`/login/company`)
          }
           if(keyProp.includes("employer")){
            Navigate(`/login/employee`)
          }
          }, 1000);
          dispatch(logOutUser())
        }
      
      }
    }
    
    // const onL = window.ononline(on)
    // console.log(onL, "onL")
    // const path = window.location.pathname;  
    // useEffect(() => {
    //   const onL = window.postMessage("hello")
    // },[])
    // useEffect(() => {
    //   if (path == "/eip/dashboard/" || path == "/eip/dashboard" ||  path == "/eip"  ||  path == "/eip/" ) {
    //     toast.error("Please login to access this feature")
    //     setTimeout(() => {
    //       Navigate(`/`)
    //     }, 1500);
    //   } 
    // },[])
    
  return (
    <>
      {
      NavBarshow ? 
        <NavigationBarMainBody full>
          <NavigationBarMainBodyWrapper>
            <NavigationBarLogoWrapper>
            <NavigationBarLogoHolder full>
                <NavigationBarLogo></NavigationBarLogo>
              </NavigationBarLogoHolder>
            </NavigationBarLogoWrapper>
            <NavigationBarLogoWrapper>
            <NavigationBarLogoHolder full>
                <CloseNavigationBar>
                <BiX
                size={40} onClick={setNavBarshow}
                style={{cursor: "pointer",  color: "#fff"}}
                />
                </CloseNavigationBar>
              </NavigationBarLogoHolder>
            </NavigationBarLogoWrapper>
           
            {
                NavBar.map((e, i)=> (
                    <NavigationRoutBar key={i}>
                         <NavLink  
                          to={e.to}
                         className={({ isActive }) =>
                             isActive ? "NavigationRoutBarWrapperActive"
                          : "NavigationRoutBarWrapperNotActive"
                             }>
                        {<e.Icon size={25}/>}

                      <p>{e.Text}</p>
                    </NavLink>
                </NavigationRoutBar>
                ))
           
            }
              <NavigationRoutBar >
                         <LogoutBtn onClick={logOut} >
                        <PiSignOutBold size={25}/>

                      <p>Log out</p>
                    </LogoutBtn>
                </NavigationRoutBar>
            
            
          </NavigationBarMainBodyWrapper>
        </NavigationBarMainBody>
      : <NavigationBarMainBody >
        <NavigationBarMainBodyWrapper >
            <NavigationBarLogoHolder >
              <NavigationBarLogo></NavigationBarLogo>
            </NavigationBarLogoHolder>
            <NavigationBarLogoHolder >
                <BiMenu
                 size={40} onClick={setNavBarshow}
                 style={{cursor: "pointer", color: "#fff"}}
                 />
            </NavigationBarLogoHolder>
            {
                NavBar.map((e, i)=> (
                    <NavigationRoutBar key={i}>
                         {/* <NavLink  
                          to={e.to}
                         className={({ isActive }) =>
                             isActive ? "NavigationRoutBarWrappeClosedActive"
                          : "NavigationRoutBarWrappeClosedNotActive"
                             }>
                        {<e.Icon size={25}/>}
                    </NavLink> */}
                </NavigationRoutBar>
                )) 
            }
             <NavigationRoutBar >
                         <LogoutBtn closed onClick={logOut}>
                        {/* <PiSignOutBold size={25}/> */}
                    </LogoutBtn>
                </NavigationRoutBar>
            </NavigationBarMainBodyWrapper>
      </NavigationBarMainBody>
      }

    </>
  );
};

export default NavigationBar;
