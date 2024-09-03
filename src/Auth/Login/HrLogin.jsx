import React, { useState } from 'react'
import { LoginWrapper, LoginWrapper2,SignUpForm, Label, Inputbody,
   Forget, Btncontainer, Button, Input, PasswordDiv, Logo, FormHeader
   } from './LoginStyle'
   import { FaEye, FaRegEyeSlash } from "react-icons/fa";
   import { useNavigate } from 'react-router-dom';
   import { BeatLoader } from "react-spinners";
   import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../Global/Redux-actions/CompanyManagement";

const HrLogin = () => {
  
  const dispatch = useDispatch()
    const [email, setEmail]=useState()
    const [password, setPassWord]=useState()
    const [emailError, setEmailerror]=useState(false)
    const [showPassWord, setShowPassord]=useState(true)
    const [loading, setloading] = useState(false)
    const Nav =useNavigate()
    // console.log(email)
    // console.log(password)
    const adminId = useSelector((state) => state.CompanyManagement.UserData?._id)

  const handlePassWord = (e) => {
    const newData = e.target.value;
    setPassWord(newData);
    if (newData.trim() === "") {
      toast.error("Password is required");
    }
  };

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
      };
    
      const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (newEmail.trim() === "") {
          toast.error("Email is required");
            setEmailerror(false);
        }
      //   else if (!validateEmail(newEmail)) {
      //     setEmailerror(true);
      // } else {
      //     setEmailerror(true);
      // }
      };
      const SigIn = async (e)=>{
        const url = "https://company-management-3iyh.onrender.com/api"
        e.preventDefault()
          if (
            email == undefined || password == undefined
          ) {
            toast.error("please fill all fields and check all error");
          }else {
            setloading(true)
            const UserData = {
               email: email,
               password: password,
             }
             try {
              const response = await axios.post(`${url}/users/log-in`, UserData)
              // console.log(response?.data)
              // console.log(response)
              // console.log(response?.data.data)
              
              toast.success(response?.data.message)
            // localStorage.setItem('TypeofUser')
                // dispatch(setTypeofUser(response?.data.data.isAdmin))
                dispatch(setUserData(response?.data.data))
           
            setloading(false)
            setTimeout(() => {
              Nav(`/eip/dashboard/${response?.data.data._id}`)
            }, 1500);
          } catch (error) {
            setloading(false)
            // console.log(error)
            // console.log(error?.response?.data?.message)
            if (!error?.response?.data?.message) {
              toast.error(error?.message)
            } else {
            toast.error(error?.response?.data?.message)
            }
          }
           }
         
    
        /// func
      }
  return (
  
        <LoginWrapper>
           <LoginWrapper2>
            {/* <Logo></Logo> */}
           <SignUpForm>
               <FormHeader>
                <h3>Admin Login</h3>
              </FormHeader> 
              <Inputbody>
              <Label >
                
              <Input type="email" placeholder="Email" onChange={handleEmail} />
            
              </Label>
              
            <PasswordDiv>
            
              <Input
                 type={showPassWord ? "password" : "text"}
                  placeholder="password"
                 Hg
                   onChange={handlePassWord}
                />
              {showPassWord ? (
                  <FaEye
                   size={25}
                 color="white"
                     cursor={"pointer"}
                     style={{marginRight: "10px"}}
                     onClick={() => setShowPassord(false)}
                   />
                 ) : (
                   <FaRegEyeSlash
                     size={25}
                     color="white"
                     cursor={"pointer"}
                     style={{marginRight: "10px"}}
                     onClick={() => setShowPassord(true)}
                   />
                 )}
               </PasswordDiv>
              </Inputbody>

               <Btncontainer> 
               {
                    loading ?
                      <Button disabled="true" style={{background: "#ccc5c5be"}} ><BeatLoader
                      color="#2c64d4"
                      size={20}
                    /></Button>
                    : 
                    <Button onClick={SigIn}>Login</Button>
                 }
                 <p style={{gap:"30px", color:"white"}}>Don't Have An Account <span onClick={()=> Nav("/signup")} style={{color:"rgba(90, 156, 255, 0.685)", cursor:"pointer", }}>Sign up</span></p>
               </Btncontainer>
               <Forget>
                <p onClick={()=> Nav("/forgot-password")}>Forget password?</p>
               </Forget>
          </SignUpForm>    
           </LoginWrapper2>
        </LoginWrapper>
        
    
  )
}

export default HrLogin
