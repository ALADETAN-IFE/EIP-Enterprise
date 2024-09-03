import React, { useState } from 'react'
import { LoginWrapper, LoginWrapper2,SignUpForm,
     Label, Inputbody, Forget, Btncontainer, Button, 
     Input, PasswordDiv, Logo, FormHeader } from './LoginStyle'
import { toast } from "react-toastify";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from "react-spinners";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from '../../Global/Redux-actions/CompanyManagement';


const EmployeeLogin = () => {
    const [LoginId, setLoginid]=useState()
    const [password, setPassWord]=useState()
    const [idError, setIderror]=useState(false)
    const [showPassWord, setShowPassord]=useState(true)
  const [passWordCheck, setPassWordCheck] = useState(false);
  const [loading, setloading] = useState(false)
 const Nav =useNavigate()
 const dispatch = useDispatch()
 const userId = useSelector((state) => state.CompanyManagement.UserData?._id)

  const handlePassWord = (e) => {
    const newData = e.target.value;
    setPassWord(newData);
    if (newData.trim() === "") {
      toast.error("Password is required");
      setPassWordCheck(false);
    }
  };

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
      };
    
      const handleEmail = (e) => {
        const newId = e.target.value;
        setLoginid(newId);
        if (newId.trim() === "") {
          toast.error("Login Id is required");
          setIderror(false);
        
        } 
      };

      const SigIn = async (e)=>{
        const url = "https://company-management-3iyh.onrender.com/api"
        e.preventDefault()
          if (
            LoginId == undefined || password == undefined
          ) {
            toast.error("please fill all fields and check all error");
          }else {
            setloading(true)
            const UserData = {
               email: LoginId,
               password: password,
             }
             try {
              const response = await axios.post(`${url}/employee/sign-in`, UserData)
              // console.log(response)
              // console.log(response?.data)
              // console.log(response?.data.data)
            
              toast.success(response?.data.message)
            // localStorage.setItem('TypeofUser')
                // dispatch(setTypeofUser(response?.data.data.isAdmin))
                dispatch(setUserData(response?.data.data))
           
            setloading(false)
            setTimeout(() => {
              Nav(`/eip/profile/${userId}`)
            }, 1500);
          } catch (error) {
            setloading(false)
            // console.log(error)
            // console.log(error?.response.data.message)
            // console.log(error?.response.data)
            // toast.error(error?.response.data.message)
            // console.log(error)
            // console.log(error?.response?.data?.message)
            toast.error(error?.message)
            toast.error(error?.response?.data?.message)
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
                <h3>Login</h3>
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
               </Btncontainer>

            </SignUpForm>
           
           </LoginWrapper2>
        </LoginWrapper>
  )
}

export default EmployeeLogin