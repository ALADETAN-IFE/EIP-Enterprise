import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input'
import { OtpVerifybody, OtpVerifybody2,
    Otpbody2, Logo, Otpmain, Text, Button1, Button,
    Timetext, Button2, Button3,
     OtpVerifybodyEmailInput, BtnHolder, EmailInput
 } from './Otpstyled'
 import { BeatLoader } from "react-spinners";
 import axios from "axios";
 import { toast } from "react-toastify";
 import { useParams ,useNavigate} from 'react-router-dom'
 import Aos from 'aos';
 import "aos/dist/aos.css"

const Hrotp = () => {
  const {token} = useParams()
    // const new = set
    const [otp, setOtp]=useState('')
    const [minutes, setMinutes]=useState(0)
    const [seconds, setSeconds]=useState(0)
    const [loading, setloading] = useState(false)
    const [Resnd, setResnd] = useState(false)
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState(false);
    useEffect(()=>{
      Aos.init();
    },[])
    useEffect(()=>{
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
    
    const Userdata =  JSON.parse(localStorage.getItem('datas'))
    // const Userdata1 = 
    // console.log(Userdata) 

  const url = "https://company-management-3iyh.onrender.com/api"
  const Nav = useNavigate();
    const resendOTP = async ()=>{
        setResnd(false)
        setMinutes(2)
        setSeconds(59)
        try {
            const response = await axios.post(`${url}/users/resend-verification-email`, {email: email})
            // console.log(response)
              Nav(`/complete-signup/${response.data.data.token}`)
            toast.success(response?.data.message)
        } catch (error) {
          console.log(error)
        }
    }

  
    const handleVerify = async ()=>{
      // console.log("OYP IS " , otp)
        setloading(true)
        
         try {
            const response = await axios.post(`${url}/users/verify-email/${token}`, {otp:otp} )
            // console.log(response.data.message)
          
          toast.success(response?.data?.message)
          setloading(false)
          setTimeout(() => {
            Nav(`/login/company`)
          }, 2000);
        } catch (error) {
          setloading(false)
          // console.log(error?.response?.data?.message)
          // console.log(error)
          toast.error(error?.response?.data?.message)
        }
    }
    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
      };
      // console.log(email,"big")
      const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);  
        console.log(email)
        if (newEmail.trim() === "") {
          toast.error("Email is required");
          setEmailError(false);
        } 
        else if (!validateEmail(newEmail)) {
          setEmailError(true);
        } 
        else{
          setEmailError(false);
        }
      };
  return (
    <OtpVerifybody>
      <OtpVerifybody2>
       {/* <Logo></Logo> */}
       <Otpbody2>
       <Text>
        <h2 style={{color:"white", fontSize: "29px", fontFamily:"San-serif", fontWeight:"300"}}>Verify Your One-Time-Password
            <br /> <span style={{fontSize:"20px", display:"flex", textAlign: "center"}}>To Confirm You as A New User</span>
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
                color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#1f1d1d"
             }}
             onClick={()=> setResnd(true)}
            >
                Resend
            </Button>
        </Button1>
        <Button2>
            
        {
                    loading ?
                      <Button3 disabled="true"><BeatLoader
                     color="#1f1d1d"
                      size={20}
                    /></Button3>
                    : 
                    <Button3 onClick={handleVerify}> Verify OTP</Button3>
                 }
        </Button2>
       </Otpbody2>
       
      </OtpVerifybody2>
      {
        Resnd ?
            <OtpVerifybodyEmailInput data-aos="zoom-in" data-aos-duration="400">
                <EmailInput  
                 placeholder="Email"
                   onChange={handleEmail}
                   />
                <BtnHolder>
                    <Button3 onClick={()=> setResnd(false)} emai >Go back</Button3>
                    <Button3 onClick={resendOTP} emai>resend</Button3>
                </BtnHolder>
            </OtpVerifybodyEmailInput>
        : null
      }
    </OtpVerifybody>
  )
}

export default Hrotp