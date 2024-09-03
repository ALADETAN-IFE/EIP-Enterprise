import React, { useState } from 'react'
import { EmployeesCard, EmployeesCardWapper, EmployeesCardTop,
  EmployeesCardImageHolderTop,EmployeesCardImageHolder,EmployeesCardName,
  EmployeesCardBottom, EmployeesCardBottomUp, EmployeesCardBottomDown,
  EmployeesCardDepartmentHolder, EmployeesCardEmail, EmployeesCardPhoneNumber,
  EmployeesCardDateAddedHolder,SeeMoreHolder, RemoveEmployee, GiveTask
  
 } from './EmployeeCardStyle'
 import { BsPlus } from "react-icons/bs";
 import { IoIosMore } from "react-icons/io";
 import { IoPersonCircleSharp } from "react-icons/io5";
 import { MdOutlineMail } from "react-icons/md";
 import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BiMinus } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

const EmployeeCard = ({employees, i, loading,CompanyId,loadDatas,employeeId}) => {
  // const [emploId, setemploId] = useState()
  // setemploId(employeeId)
  const [SeeMore, setSeeMore] = useState(false)
  const [showSeeMore, setshowSeeMore] = useState(false)
  const Navigate =  useNavigate()

  const handleseeMore = () => {
    setSeeMore(!SeeMore)
  }
  const AddTask = () => {
    Navigate(`/eip/employee/add-task/${employees?.Name}`)
  }
  const removeEmployee = async () => {
    const url = "https://company-management-3iyh.onrender.com/api"     
    Navigate(`/eip/employee/${CompanyId}/${employees?._id}`)  
    setTimeout(() => {
      console.log(employees?._id,"employeeId")  
      console.log(employeeId, "employeeId")    
    }, 1000);  
    // try {
    //   const response = await axios.post(`${url}/employee/terminate/${CompanyId}/${employeeId}`,)
    //   console.log(response?.data)      
    //   console.log(response?.data.data)          
    //   toast.success(response?.data.message)
    //   // loadDatas()
    // } catch (error) {
    //   console.log(error)
    //   console.log(error?.response.data.message)
    //   console.log(error?.response.status)
    //   toast.error(error?.response.data.message)
    // }
  }
  return (
      <>
      {
        employees.length < 1  || employees == undefined ?
        <p>
          No employees found. Please add some employees to see them here.
        </p>
        :     <>
        {
          loading ?
          <EmployeesCard >
          <EmployeesCardWapper>
           <EmployeesCardName>
           loading...
            </EmployeesCardName>
           <EmployeesCardName>
           loading...
            </EmployeesCardName>
                  
                {/* <EmployeesCardDateAddedHolder>
                   <span> Hired Date</span>
                  {employees?.dateEmployed}Date
                </EmployeesCardDateAddedHolder> */}
              <EmployeesCardEmail>
              loading...
                </EmployeesCardEmail>
                <EmployeesCardPhoneNumber>
              <span> loading...

              {/* phoneNumber phoneNumber phoneNumber phoneNumber  */}
              </span>
              
            
              </EmployeesCardPhoneNumber>
            
          </EmployeesCardWapper>
        </EmployeesCard>
          : 
          <EmployeesCard 
          key={employees?._id} 
          onMouseOver={()=> setshowSeeMore(true)}
          onMouseOut={()=> setshowSeeMore(false)}
          style={showSeeMore ? {paddingRight: "4px"}: null}
          >
          <EmployeesCardWapper>
           <EmployeesCardName>
              {employees?.fullName} 
            </EmployeesCardName>
           <EmployeesCardName>
           {employees?.role} 
            </EmployeesCardName>
                  
                {/* <EmployeesCardDateAddedHolder>
                   <span> Hired Date</span>
                  {employees?.dateEmployed}Date
                </EmployeesCardDateAddedHolder> */}
              <EmployeesCardEmail>
              {employees?.email}
                </EmployeesCardEmail>
                <EmployeesCardPhoneNumber>
              <span>{employees?.phoneNumber} 

              {/* phoneNumber phoneNumber phoneNumber phoneNumber  */}
              </span>

            
              </EmployeesCardPhoneNumber>
            
           
            {/* <EmployeesCardImageHolderTop> */}
              {/* <EmployeesCardImageHolder>
                <IoPersonCircleSharp size={70} />
              </EmployeesCardImageHolder> */}
              
            {/* </EmployeesCardImageHolderTop> */}
            {
                showSeeMore ?
                  <>
                  <IoIosMore size={40} style={{cursor: "pointer"}} onClick={handleseeMore}/>
                {
                    SeeMore ? 
                    <SeeMoreHolder>
                      <RemoveEmployee onClick={removeEmployee}>
                      <BiMinus size={25}  />
                        Terminate employee
                      </RemoveEmployee>
                      <GiveTask onClick={AddTask}>
                      <BsPlus size={25}/>
                        Add task to employee 
                      </GiveTask>
                    </SeeMoreHolder>
                    : null
                }
                  </>
                : " " 
              }
            
          </EmployeesCardWapper>
        </EmployeesCard>

        
         }
        
        </>
      }
      </>
  )
}

export default EmployeeCard