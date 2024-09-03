import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminPrivateRouting = () => {
    const adminOrNot = useSelector((state) => state?.CompanyManagement?.UserData)
    const keyProp = Object?.keys(adminOrNot)
    // useEffect(() => {
    //   if(keyProp.includes("isAdmin")){
    //     setNavBar(NavBar)
    //   }
    // //    if(keyProp.includes("employer")){
    // //     // const keyProp1 = Object.keys(NavBar[0])
    // //   console.log();
    // //     const filt = NavBar.filter((e)=> e.Text == "Employee" && e.Text !== "Dashboard"  )
    // //     setNavBar(filt)
    // //   }

    // }, [])

    
    // console.log(isLogedInDetails >= 1, "nothing")
    useEffect(() => { 
        if (keyProp.includes("employer") ) {
          toast.error("You don't have access to this feature")
        } 
      },[])
    return (
    <>
    {
       keyProp.includes("isAdmin") ? 
        <Outlet/>
        :  <Navigate to={"/"} />
    }
    </>

  )
}

export default AdminPrivateRouting