import React, { useState } from 'react'
import { EmployeesPageMainBody, EmployeesPageMainBodyWrapper,EmployeesPageHeaderSection,
    EmployeesPageHeaderSectionWrapper,EmployeesSection,
    EmployeesSectionWrapper
   } from '../../Pages/Employees/EmployeesPageStyle'
import { AddTaskForm, AddTaskFormWrapper,AddTaskInputHolder,
   AddTaskLabel, AddTaskInput, AddTaskBtnHolder, AddTaskBtn
   } from './AddTaskStyle'
import { BsPerson, BsPlus } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
const AddTask = () => {
    const { name } = useParams();
    
  return (
    <EmployeesPageMainBody>
    <EmployeesPageMainBodyWrapper>
      <EmployeesPageHeaderSection>
        <EmployeesPageHeaderSectionWrapper>
          <h3>Add Task for {name}</h3>
        </EmployeesPageHeaderSectionWrapper>
      </EmployeesPageHeaderSection>
      <EmployeesSection>
        <EmployeesSectionWrapper AddEmployee>
        <AddTaskForm>
          <AddTaskFormWrapper>
          <AddTaskInputHolder>
              <AddTaskLabel> Employee's Task</AddTaskLabel>
              <AddTaskInput 
                type="text" 
                placeholder="Employee's Task"
                />
              </AddTaskInputHolder>
              <AddTaskBtnHolder>
                <AddTaskBtn>Add Task</AddTaskBtn>
              </AddTaskBtnHolder>
          </AddTaskFormWrapper>
        </AddTaskForm>
        </EmployeesSectionWrapper>
      </EmployeesSection>
    </EmployeesPageMainBodyWrapper>
  </EmployeesPageMainBody>
  )
}

export default AddTask