import React, { useEffect, useState } from "react";
// import {MainBody} from "../LoginMange/Form2";
import { MainBody, Wrapper, Logo, SignUpForm, PassWordCheckDiv, 
    Btncontainer, Button, Inputdiv, Headlogo, PasswordDiv, Text, Input
 } from "./SignUpStyle";
 import { FaEye, FaRegEyeSlash } from "react-icons/fa"; 
 // import { FcGoogle } from "react-icons/fc";
 // // import Loading from "../Loading";
 import { useNavigate } from 'react-router-dom';
 import { toast } from "react-toastify";
import { BeatLoader  } from "react-spinners";
import axios from "axios";

const HrSignUp = () => {
    const [showPassWord, setShowPassord] = useState(true);
    const [showPassWord2, setShowPassord2] = useState(true);
    
    const [userName, setUserName] = useState();
    const [userCName, setCompanyName] = useState();
    const [email, setEmail] = useState();
    const [passWord, setPassWord] = useState();
    const [CpassWord, setCPassWord] = useState();
    
    const [emailError, setEmailError] = useState(false);
    
    const [cpassWordCheck, setCPassWordCheck] = useState(false);
    const [passWordCheck, setPassWordCheck] = useState(false);

    const [passwordErrorlow, setPasswordErrorLow] = useState(false);
    const [passwordErrorUpper, setPasswordErrorUpper] = useState(false);
    const [passwordErrorNumber, setPasswordErrorNumber] = useState(false);
    const [passwordErrorSymbol, setPasswordErrorSymbol] = useState(false);
    const [passwordErrorLength, setPasswordErrorLength] = useState(false);
    
    const [loading, setloading] = useState(false)

   
   
  
    const Nav = useNavigate();
  
    const handleUsername = (e) => {
      const newName = e.target.value;
      setUserName(newName);
      if (newName.trim() === "") {
        toast.error("Username is required");
      }
    }
    const handleCompanyname = (e) => {
      const newName = e.target.value;
      setCompanyName(newName);
      if (newName.trim() === "") {
        toast.error("Company name is required");
      }
    }
  
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

   const handlePassWord = (e) => {
    const newData = e.target.value;
    setPassWord(newData);
    console.log(newData)
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
      // console.log("true", 1)
      if (newData.length > 7) {
        setPasswordErrorLength(false);
      } else {
        setPasswordErrorLength(true);
      }
  
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
    }
    if (newData !== CpassWord && CpassWord !== undefined ) {
      setCPassWordCheck(true);
    }
     else{
      setCPassWordCheck(false);
    }
   
    // else {
    //   setPassWordCheck(false);
    // }
    // console.log(passWordCheck, "passWordCheck")
    // console.log(passwordErrorLength, "passwordErrorLength")
    // console.log(passwordErrorNumber, "passwordErrorNumber")
    // console.log(passwordErrorSymbol, "passwordErrorSymbol")
    // console.log(passwordErrorUpper, "passwordErrorUpper")
    // console.log(passwordErrorlow, "passwordErrorlow")
  };
  
  //   const handlePassWord = (e) => {
  //     const newData = e.target.value;
  //     setPassWord(newData);
  //     if (newData.trim() === "") {
  //       toast.error("Password is required");
  //       setPassWordCheck(false);
  //     }
  //     if (newData.length > 7 && 
  //       passwordErrorlow == true &&
  //       passwordErrorUpper == true &&
  //       passwordErrorNumber == true &&
  //       passwordErrorSymbol == true 
  //     ) {
  //       setPassWordCheck(false);
  //     } else {
  //       setPassWordCheck(true);
  //     }
  //     if (newData.length >= 8) {
  //       setPasswordErrorLength(false);
  //     }else{
  //       setPasswordErrorLength(true)
  //     }

  //     if (!containsLowercase(newData)) {
  //       setPasswordErrorLow(true);
  //     } else {
  //       setPasswordErrorLow(false);
  //     }
  //     if (!containsUpperrcase(newData)) {
  //       setPasswordErrorUpper(true);
  //     } else {
  //       setPasswordErrorUpper(false);
  //     }
  //     if (!containsNumber(newData)) {
  //       setPasswordErrorNumber(true);
  //     } else {
  //       setPasswordErrorNumber(false);
  //     }
  //     if (!containsSymbol(newData)) {
  //       setPasswordErrorSymbol(true);
  //     } else {
  //       setPasswordErrorSymbol(false);
  //     }
  // } 
    
  const handleCPassWord = (e) => {
      const newData = e.target.value;
      setCPassWord(newData);
      // setPassWordCheck(false);
      if(newData.trim() == ""){
        toast.error("Both passwords are required");
      }
      else if (newData !== passWord ) {
        setCPassWordCheck(true);
      }
       else{
        setCPassWordCheck(false);
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
  


  
    const SignUp =  async (e)=>{
      const url = "https://company-management-3iyh.onrender.com/api"
      e.preventDefault()
      setloading(true)
    
       if (
        userName == undefined ||
        userCName == undefined ||
        email == undefined ||
        passWord == undefined ||
        CpassWord == undefined ||
        passWord !== CpassWord 
      ) {
        toast.error("please fill all fields and check all error");
       } 
       else {
        setloading(true)
         const UserData = {
           fullName: userName,
           companyName: userCName,
           email: email,
           password: passWord,
         }


         try {
          const response = await axios.post(`${url}/users/sign-up`, UserData)
          console.log(response)
        
          toast.success(response.data.message)
        // localStorage.setItem('datas',JSON.stringify({
        //   token:token ,
        //   id: _id
        // }))
       
        setloading(false)
        setTimeout(() => {
          Nav(`/complete-signup/${response.data.data.token}`)
        }, 2000);
      } catch (error) {
        setloading(false)
        // console.log(error?.response.data.message)
        // toast.error(error?.response.data.message)
        console.log(error)
        console.log(error?.response?.data?.message)
        toast.error(error?.message)
        toast.error(error?.response?.data?.message)
      }
       }
       // func
     }
  
   
  
    return (
      <MainBody>
          <Wrapper>
              {/* <Logo></Logo> */}
          <SignUpForm>
            <Headlogo>
              <h2>Admin Sign Up</h2>
            </Headlogo>
          
           <Inputdiv>
           <Input type="text" 
           placeholder="Enter Full Name" 
            onChange={handleUsername}
            required
            />
            <Input type="text" 
            placeholder="Enter Company Name"
              onChange={handleCompanyname} 
              required
              />
                <Input type="text" 
                  placeholder="Email"
                  onChange={handleEmail}
                  required
                    />
                {
                emailError ? (
                  <p style={{ fontSize:"22px" , color:"rgb(236, 59, 59)" }}>
                    inavlid email format</p>
                ) : null}
                 <PasswordDiv>
                  <Input
                    type={showPassWord ? "password" : "text"}
                    placeholder="Enter password"
                    Hg
                    onChange={handlePassWord}
                    required
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
                {passWordCheck ? (
                     <PassWordCheckDiv >
                     {passwordErrorUpper ? <p style={{color:"rgb(236, 59, 59)", fontSize:"18px" }}>Capital</p> : null}
                     {passwordErrorlow ? <p style={{color:"rgb(236, 59, 59)", fontSize:"18px" }}>Lowercase</p> : null}
                     {passwordErrorSymbol ? <p style={{color:"rgb(236, 59, 59)", fontSize:"18px" }}>Symbols</p> : null}
                     {passwordErrorNumber ? <p style={{color:"rgb(236, 59, 59)", fontSize:"18px" }}>Numbers</p> : null}
                     {passwordErrorLength ? <p style={{color:"rgb(236, 59, 59)", fontSize:"18px" }}>8 Charaters</p> : null}
                   </PassWordCheckDiv>
                ) : null}
                <PasswordDiv>
                  <Input
                    type={showPassWord2 ? "password" : "text"}
                    placeholder="Confirm password"
                    Hg
                    onChange={handleCPassWord}
                    required
                  />
                  {showPassWord2 ? (
                    <FaEye
                      size={25}
                      color="white"
                      cursor={"pointer"}
                      style={{marginRight: "10px"}}
                      onClick={() => setShowPassord2(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      size={25}
                      color="white"
                      cursor={"pointer"}
                      style={{marginRight: "10px"}}
                      onClick={() => setShowPassord2(true)}
                    />
                  )}
                </PasswordDiv>
                
                {cpassWordCheck ? (
                     <PassWordCheckDiv>
                       <p style={{color:"rgb(236, 59, 59)", fontSize:"18px" }}>Password don't match</p>
                   </PassWordCheckDiv>
                ) : null}
               
           </Inputdiv>
           <Btncontainer>
                  
                 
           {
                    loading ?
                      <Button disabled style={{background: "#ccc5c5be"}} ><BeatLoader
                      color="#2c64d4"
                      size={20}
                    /></Button>
                    : 
                    <Button onClick={SignUp} >Sign Up</Button>
                 }
                 
                 </Btncontainer>
                 <p style={{gap:"30px", color:"white"}}>Already Have An Account <span onClick={()=> Nav("/login/company")} style={{color:"rgba(90, 156, 255, 0.685)", cursor:"pointer", }}>Login</span></p>
                 
          </SignUpForm>
          </Wrapper>
         
      </MainBody>
    )
}

export default HrSignUp