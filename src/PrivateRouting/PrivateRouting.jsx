import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

const PrivateRouting = () => {
    const isLogedInDetails = useSelector((state)=> state?.CompanyManagement?.UserData)
    console.log(isLogedInDetails, "isLogedInDetails" )
    // console.log(Object?.keys(), "isLogedInDetails212" )

    
    console.log(isLogedInDetails >= 1, "nothing")
    useEffect(() => { 
        if (!isLogedInDetails ) {
          toast.error("Please login to have access")
        } 
      },[])
    return (
    <>
    {
       !isLogedInDetails ? 
        <Navigate to={"/"} />
        : <Outlet/>
    }
    </>

  )
}

export default PrivateRouting