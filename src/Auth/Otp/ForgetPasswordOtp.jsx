import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { OtpVerifybody, OtpVerifybody2,
    Otpbody2, Logo, Otpmain, Text, Button1, Button,
    Timetext, Button2, Button3
 } from './Otpstyled'
 import {useParams, useNavigate } from 'react-router-dom';
 import { BeatLoader } from "react-spinners";
 import axios from "axios";
 import { toast } from "react-toastify";

const ForgetPasswordOtp = () => {
    const {token} = useParams()
    const [otp, setOtp]=useState('')
    const [minutes, setMinutes]=useState(0)
    const [seconds, setSeconds]=useState(0)
    const [loading, setloading] = useState(false)

    useEffect( ()=>{
        const interval = setInterval(()=>{
            if(seconds > 0 ){
                setSeconds(seconds - 1)
            }
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval(interval)
                }else{
                    setSeconds(59)
                    setMinutes(minutes - 1)
                }
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    })
    const sendOTP =()=>{
        setMinutes(2)
        setSeconds(59)
    }
    const resendOTP =()=>{
        setMinutes(2)
        setSeconds(59)
    }
    const Nav =useNavigate()

    const handleVerify = async ()=>{
        const url = "https://company-management-3iyh.onrender.com/api"
        console.log("OYP IS " , otp)
      
         if ( otp == undefined ) {
          toast.error("please fill all fields and check all errors");
         } 
         else {
          setloading(true)
           const UserData = {
            otp: otp,
           }
           try {
            const response = await axios.post(`${url}/users/verify-otp/${token}`, UserData)
            console.log(response)
          
            toast.success(response.data.message)         
          setloading(false)
          setTimeout(() => {
            Nav(`/new-password/${token}`)
          }, 2000);
        } catch (error) {
          setloading(false)
          console.log(error?.response.data.message)
          toast.error(error?.response.data.message)
        }
         }
      }
  return (
    <OtpVerifybody>
      <OtpVerifybody2>
       {/* <Logo></Logo> */}
       <Otpbody2>
       <Text>
        <h2 style={{color:"white", fontSize: "29px", fontFamily:"San-serif", fontWeight:"300"}}>Verify Your One-Time-Password
            <br /> <span style={{fontSize:"20px", display:"flex", textAlign: "center"}}>To Reset Your New Password</span>
        </h2>
       </Text>
        <Otpmain>
          <OtpInput
          
          value={otp}
          numInputs={4}
          onChange={setOtp}
         
          renderSeparator={<span> </span>}
          inputType="tel"
          containerStyle={{display : "unset"}}
          inputStyle={{ width : "3.5rem ", gap:"30px",   height: "4rem"}}
          renderInput={(props) => <input {...props} className='otp-input' />}
          />
        </Otpmain>
        <Timetext>
            {seconds > 0 || minutes > 0 ? (
                <p>
                    Time Remaining : {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                </p>
            ) : (
                <p>Didn`t recieve code ?</p>
            )
        }
        </Timetext>
        <Button1>
        
            <Button 
             disabled={seconds > 0 || minutes > 0}
             style={{
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "FF5630"
             }}
             onClick={resendOTP}
            >
                Resend
            </Button>
        </Button1>
        <Button2>
          
               {
                    loading ?
                      <Button disabled="true"style={{background: "#ccc5c5be"}} ><BeatLoader
                      color="#2c64d4"
                      size={20}
                    /></Button>
                    : 
                    <Button3 onClick={handleVerify}> Verify OTP</Button3>
                 }
        </Button2>
       </Otpbody2>
       
      </OtpVerifybody2>
    </OtpVerifybody>
  )
}

export default ForgetPasswordOtp