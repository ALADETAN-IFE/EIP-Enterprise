import React, { useEffect, useState } from "react";
import { MainBody, Wrapper, Logo, SignUpForm, PassWordCheckDiv, 
    Btncontainer, Button, Inputdiv, Headlogo, PasswordDiv, Text, Input
 } from './NewpasswordStyle'
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import {useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
import axios from "axios";

const Newpassword = () => {
  const {token} = useParams()
  const [showPassWord, setShowPassord] = useState(true);
  const [showPassWord2, setShowPassord2] = useState(true);
  const [passWordCheck, setPassWordCheck] = useState(false);
  const [passWord, setPassWord] = useState();
  const [CpassWord, setCPassWord] = useState();
  const [cpassWordCheck, setCPassWordCheck] = useState(false);
  const [loading, setloading] = useState(false);

  const [passwordErrorlow, setPasswordErrorLow] = useState();
  const [passwordErrorUpper, setPasswordErrorUpper] = useState();
  const [passwordErrorNumber, setPasswordErrorNumber] = useState();
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();

  const [passwordErrorLength, setPasswordErrorLength] = useState();
 

  const Nav = useNavigate();


  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };

  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };

  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };

  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };
 const containsRequired = (input )=>{
    return /^(?=.{8,})/.test(input)
 }
 const handleCPassWord = (e) => {
    const newData = e.target.value;
    setCPassWord(newData);
    if (newData.trim() === "") {
      toast.error("Password dont match");
      setCPassWordCheck(false);
    }    
     else if (newData !== passWord ) {
      setCPassWordCheck(true);
    }
     else{
      setCPassWordCheck(false);
    }
}
 
  const handlePassWord = (e) => {
    const newData = e.target.value;
    setPassWord(newData);
    if (newData.trim() === "") {
      toast.error("Password is required");
      setPassWordCheck(false);
    }
    if (
      newData.length > 7 
      && passwordErrorlow == false 
      && passwordErrorUpper == false 
      && passwordErrorNumber == false 
      && passwordErrorSymbol == false
    ) {
      setPassWordCheck(false);
      // console.log("false", 2)
    } else {
      setPassWordCheck(true);
      if (!containsLowercase(newData)) {
        setPasswordErrorLow(true);
      } else {
        setPasswordErrorLow(false);
      }
      if (!containsUpperrcase(newData)) {
        setPasswordErrorUpper(true);
      } else {
        setPasswordErrorUpper(false);
      }
      if (!containsNumber(newData)) {
        setPasswordErrorNumber(true);
      } else {
        setPasswordErrorNumber(false);
      }
      if (!containsSymbol(newData)) {
        setPasswordErrorSymbol(true);
      } else {
        setPasswordErrorSymbol(false);
      }
      if (!containsRequired(newData)) {
          setPasswordErrorLength(true);
      } else {
          setPasswordErrorLength(false);
      }
    }
    if (newData !== CpassWord && CpassWord !== undefined ) {
      setCPassWordCheck(true);
    }
     else{
      setCPassWordCheck(false);
    }

  };

  
  const CreateNewPassword = async ()=>{
    const url = "https://company-management-3iyh.onrender.com/api"
  
     if ( passWord !== CpassWord ) {
      toast.error("please fill all fields and check all errors");
     } 
     else {
      setloading(true)
       const UserData = {
        password: passWord,
       }
       try {
        const response = await axios.post(`${url}/users/reset-password/${token}`, UserData)
        console.log(response)
      
        toast.success(response.data.message)         
      setloading(false)
      setTimeout(() => {
        Nav(`/login/company`)
      }, 2000);
    } catch (error) {
      setloading(false)
      console.log(error?.response.data.message)
      toast.error(error?.response.data.message)
    }
     }
  }
 

  return (
    <MainBody>
        <Wrapper>
            <Logo></Logo>
        <SignUpForm>
          <Headlogo>Create New Password</Headlogo>
        
         <Inputdiv>
        
               <PasswordDiv>
                <Input
                  type={showPassWord ? "password" : "text"}
                  placeholder="New password"
                  Hg
                  onChange={handlePassWord}
                />
                {showPassWord ? (
                  <FaEye
                    size={25}
                    color="white"
                    cursor={"pointer"}
                    onClick={() => setShowPassord(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    size={25}
                    color="white"
                    cursor={"pointer"}
                    onClick={() => setShowPassord(true)}
                  />
                )}
              </PasswordDiv>
              {passWordCheck ? (
                <PassWordCheckDiv  style={{color:"red"}}>
                  {passwordErrorUpper ? <span>Capital</span> : null}
                  {passwordErrorlow ? <span>Lowercase</span> : null}
                  {passwordErrorSymbol ? <span>Symbols</span> : null}
                  {passwordErrorNumber ? <span>Numbers</span> : null}
                  {passwordErrorLength ? <span> 8 charaters</span> : null}
                </PassWordCheckDiv>
              ) : null}
                    <PasswordDiv>
                <Input
                  type={showPassWord2 ? "password" : "text"}
                  placeholder="Confirm New password"
                  Hg
                  onChange={handleCPassWord}
                />
                {showPassWord2 ? (
                  <FaEye
                    size={25}
                    color="white"
                    cursor={"pointer"}
                    onClick={() => setShowPassord2(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    size={25}
                    color="white"
                    cursor={"pointer"}
                    onClick={() => setShowPassord2(true)}
                  />
                )}
              </PasswordDiv>
              {cpassWordCheck ? (
                     <PassWordCheckDiv>
                       <span style={{color:"red"}}>Password don't match</span>
                   </PassWordCheckDiv>
                ) : null}
         </Inputdiv>
         <Btncontainer>
         {
                    loading ?
                      <Button disabled="true" ><MoonLoader
                      color="#ff9900"
                      size={20}
                    /></Button>
                    : 
                    <Button   onClick={CreateNewPassword}>Create Password</Button>
                 }
                 
               
               </Btncontainer>
               
        </SignUpForm>
        </Wrapper>
       
    </MainBody>
  );
};

export default Newpassword;
