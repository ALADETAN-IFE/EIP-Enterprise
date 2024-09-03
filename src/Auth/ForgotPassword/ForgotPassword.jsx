import React, { useState } from 'react'
import { LoginWrapper, LoginWrapper2,SignUpForm, Label, Inputbody,
     Forget, Btncontainer, Button, Input,
      PasswordDiv, Logo, FormHeader } from './ForgoPasswordStyle'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from "react-spinners";
import axios from "axios";

const ForgoPassword = () => {
    const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const [loading, setloading] = useState(false)
  
 const Nav = useNavigate()
 
  

 const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail.trim() === "") {
      toast.error("Email is required");
      setEmailError("");
    } else if (!validateEmail(newEmail)) {
      setEmailError(false);
    } else {
  
    }
  };

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
      };

      const verifyEmail =  async (e)=>{
        const url = "https://company-management-3iyh.onrender.com/api"
        e.preventDefault()
      
         if ( email == undefined ) {
          toast.error("please fill all fields and check all errors");
         } 
         else {
          setloading(true)
           const UserData = {
             email: email,
           }
           try {
            const response = await axios.post(`${url}/users/forgot-password`, UserData)
            console.log(response)
          
            toast.success(response.data.message)         
          setloading(false)
          setTimeout(() => {
            Nav(`/reset-password/${response.data.token}`)
          }, 2000);
        } catch (error) {
          setloading(false)
          console.log(error?.response.data.message)
          toast.error(error?.response.data.message)
        }
         }
      }
    
   
  return (
  
        <LoginWrapper>
           <LoginWrapper2>
            {/* <Logo></Logo> */}
           <SignUpForm>
               <FormHeader>
                <h3>Reset Password</h3>
              </FormHeader> 
              <Inputbody>
              <Label >            
              <Input type="email" placeholder="Email" onChange={handleEmail} />
              {emailError ? (
                <p style={{color:"rgb(236, 59, 59)", fontSize:"18px" }}>Inavlid email format</p>
              ) : null}

              </Label>
           </Inputbody>

               <Btncontainer>
               
               {
                    loading ?
                      <Button disabled="true" ><MoonLoader
                      color="#ff9900"
                      size={20}
                    /></Button>
                    : 
                    <Button  onClick={verifyEmail}>Submit</Button>
                 }
               </Btncontainer>
               <p style={{gap:"30px"}}>Already Have An Account <span onClick={()=> Nav("/login/company")} style={{color:"rgba(90, 156, 255, 0.685)", cursor:"pointer", }}>Login</span></p>  
            </SignUpForm>
           
           </LoginWrapper2>
        </LoginWrapper>
        
    
  )
}

export default ForgoPassword