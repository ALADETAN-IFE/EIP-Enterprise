import React, { useState, useEffect } from 'react'
import { EmployeesPageMainBody, EmployeesPageMainBodyWrapper,EmployeesPageHeaderSection,
  EmployeesPageHeaderSectionWrapper,EmployeesSection,
  EmployeesSectionWrapper, EmployeesHeadSection
 } from '../Employees/EmployeesPageStyle'
 import { AddEmployeesForm, AddEmployeesFormWrapper, AddEmployeesInput,
  AddEmployeesFormHeader, AddEmployeesLabel,AddEmployeesBtnHolder, AddEmployeesBtn, InputHolder
 } from './AddEmployeeStyle'
 import { BsPerson, BsPlus } from "react-icons/bs";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import Button from '../../Components/Button/Button';
import { setAddEmployeeForm } from "../../Global/Redux-actions/CompanyManagement";
import { useDispatch } from 'react-redux';
import 'animate.css';

const AddEmployee = () => {
  const {adminId} = useParams()
  const [EmployeesDataLength, setEmployeesDataLength] = useState([ ])

  const [EmployeeName, setEmployeeName] = useState();
  const [EmployeeEmail, setEmployeeEmail] = useState();
  const [EmployeeEmailError, setEmployeeEmailError] = useState([false, ""]);
  const [EmployeeRole, setEmployeeRole] = useState();
  const [EmployeePhoneNumber, setEmployeePhoneNumber] = useState();
  const [EmployeeSalary, setEmployeeSalary] = useState();

  const [loading, setloading] = useState(false)
  const Dispatch = useDispatch()
  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const changeEmailErrorState = (position, change, old) => {
    EmployeeEmailError.map((e, i) => {
      if (i === position) {
        const not = EmployeeEmailError.findIndex((e, i) => i !== position);
        EmployeeEmailError[not] = old;
        EmployeeEmailError[i] = change;
        return e;
      }
    });
  };

  const handleEmployeeEmail = (e) => {
    const newEmail = e.target.value;
    setEmployeeEmail(newEmail);

    // Validate the email
    if (newEmail.trim() === "") {
      toast.error("Email is required");
      changeEmailErrorState(0, "false", "");
    } else if (!validateEmail(newEmail)) {
      changeEmailErrorState(0, "true", "Invalid email format");
      changeEmailErrorState(1, "Invalid email format", "true");
    }else{
      changeEmailErrorState(0, "false", "");
    }
  };

  const handleEmployeeName = (e) => {
    const newData = e.target.value;
    setEmployeeName(newData);
  };
  const handleEmployeeRole = (e) => {
    const newData = e.target.value;
    setEmployeeRole(newData);
  };

  const handleEmployeePhoneNumber = (e) => {
    const newData = e.target.value;
    setEmployeePhoneNumber(newData);
  };
  const handleEmployeeSalary = (e) => {
    const newData = e.target.value;
    setEmployeeSalary(newData);
  };

  const Navigate = useNavigate()
  const handleSubmitNewEmployee = async (e)=>{
    const url = "https://company-management-3iyh.onrender.com/api"
    e.preventDefault()
  
     if (
      EmployeeName == undefined ||
      EmployeeEmail == undefined ||
      EmployeeRole == undefined ||
      EmployeePhoneNumber == undefined ||
      EmployeeSalary == undefined 
    ) {
      toast.error("please fill all fields and check all error");
     } 
     else {
      setloading(true)
       const UserData = {
         fullName: EmployeeName,
         email: EmployeeEmail,
         role: EmployeeRole,
         phoneNumber: EmployeePhoneNumber,
         salary: EmployeeSalary,
       } 
       try {
        const response = await axios.post(`${url}/employee/sign-up/${adminId}`, UserData)
        console.log(response)
      
        toast.success(response.data.message)
      setloading(false)
      setTimeout(() => {
        Navigate(`/eip/employee/${adminId}`)
      }, 2000);
    } catch (error) {
      setloading(false)
      console.log(error?.response.data.message)
      toast.error(error?.response.data.message)
    }
     }
    
  }  
 const loadDatasLength = async ()=>{
    const url = "https://company-management-3iyh.onrender.com/api"       
        setloading(true)
        
         try {
          const response = await axios.get(`${url}/employee/get-all-employees/${adminId}`,)
          console.log(response)      
          console.log(response?.data)      
          console.log(response?.data.data)      
          setEmployeesDataLength(response?.data)      
          // toast.success(response?.data.message)
       
        setloading(false)
      } catch (error) {
        setloading(false)
        console.log(error)
        // console.log(error?.response.data.message)
        // toast.error(error?.response.data.message)
      }
  }

  // employee/sign-up/:userId

  useEffect(() => {
    loadDatasLength()
  },[])

  // Docker Fisherman1
  return (
    <EmployeesPageMainBody>
      <EmployeesPageMainBodyWrapper>
        <EmployeesPageHeaderSection>
          <EmployeesPageHeaderSectionWrapper>
         
            <Button title={"Go Back"} noIcon func={()=> Dispatch(setAddEmployeeForm())}/>
          </EmployeesPageHeaderSectionWrapper>
        </EmployeesPageHeaderSection>
        <EmployeesSection>
          <EmployeesSectionWrapper AddEmployee>
          {/* <EmployeesHeadSection>
            { 
              EmployeesDataLength.length >= 2 ? 
                <h6><span>{EmployeesDataLength.length}</span>Employees</h6>
              : EmployeesDataLength.length <  2 ?
                <h6><span>{EmployeesDataLength.length}</span>Employee</h6>
              :
                <h6><span>0</span>Employee</h6>

            }<AddEmployeesFormHeader>
            Input Employee Credentials
        </AddEmployeesFormHeader>
          </EmployeesHeadSection> */}
          <AddEmployeesForm>
            <AddEmployeesFormWrapper>
                 <h4 style={{fontSize: "30px"}}>Add Employee form</h4>
              <InputHolder>
              <AddEmployeesLabel> Employee's Full Name</AddEmployeesLabel>
              <AddEmployeesInput 
                type="text" 
                placeholder="Employee's Full Name"
                onChange={handleEmployeeName}
                />
              </InputHolder>
              <InputHolder>
              <AddEmployeesLabel> Employee's Email</AddEmployeesLabel>
              <AddEmployeesInput 
                type="email" 
                placeholder="Employee's Email"
                onChange={handleEmployeeEmail}
                />
                 {EmployeeEmailError[0] && EmployeeEmailError[1].length > 0 ? (
                  <span style={{ color: "red" }}> {EmployeeEmailError[1]}</span>
                ) : null}
              </InputHolder>
           
              <InputHolder>
              <AddEmployeesLabel> Employee's Role</AddEmployeesLabel>
              <AddEmployeesInput 
                type="text" 
                placeholder="Employee's Role"
                onChange={handleEmployeeRole}
                />
              </InputHolder>
              <AddEmployeesLabel> Employee's PhoneNumber</AddEmployeesLabel>
              <AddEmployeesInput 
                type="number" 
                placeholder="Employee's PhoneNumber"
                onChange={handleEmployeePhoneNumber}
                />
              {/* <InputHolder>
              <AddEmployeesLabel> Employee's Salary</AddEmployeesLabel>
              <AddEmployeesInput 
                type="number" 
                placeholder="Employee's PhoneNumber"
                onChange={handleEmployeeSalary}
                />
              </InputHolder> */}
              <AddEmployeesBtnHolder>
                {
                  loading ?
                    // <AddEmployeesBtn disabled="true" ></AddEmployeesBtn>
                    <Button title={<BeatLoader
                      color="#2c64d4"
                      size={20}
                    />} noIcon/>
                  : 
                  <Button title={"Add Employee"} func={handleSubmitNewEmployee} noIcon/>
                    // <AddEmployeesBtn onClick={}></AddEmployeesBtn>
                 }
              </AddEmployeesBtnHolder>
            </AddEmployeesFormWrapper>
          </AddEmployeesForm>
          </EmployeesSectionWrapper>
        </EmployeesSection>
      </EmployeesPageMainBodyWrapper>
    </EmployeesPageMainBody>
  )
}


export default AddEmployee