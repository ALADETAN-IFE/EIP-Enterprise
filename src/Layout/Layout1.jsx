import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom'
import toast from 'react-hot-toast';

const Layout1 = () => {
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
    <>
      <Outlet/>
    </>
  )
}

export default Layout1