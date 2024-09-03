import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import {TaskBody,TaskTop,TaskNav,Name, TaskSearchBar,
    TaskA,JobTitle,Status,NavTop, TasksWrapper, TaskCardEmpty} from './AllTaskPageStyle'
import { RiExpandUpDownLine } from "react-icons/ri";
import TaskCard from '../../Components/TasksCard/TaskCard.jsx';
import { BiSearch } from 'react-icons/bi';

const AllTaskPage = () => {
    const [Task, setTask] = useState([
      {
      status: "Pending",
      task: "build1"
    },
      {
      status: "Pending",
      task: "build2"
    },
      {
      status: "Pending",
      task: "build4"
    },
      {
      status: "Pending",
      task: "build"
    },
      {
      status: "Pending",
      task: "kuild"
    },
      {
      status: "Pending",
      task: "build"
    },
      {
        status: "Pending",
        task: "build"
    },
      {
         status: " Pending",
         task: "Lorem ipsum dolor sit amet consec"
    },
  ])
    const [Task2, setTask2] = useState([
      {
      status: "Pending",
      task: "build1"
    },
      {
      status: "Pending",
      task: "build2"
    },
      {
      status: "Pending",
      task: "build4"
    },
      {
      status: "Pending",
      task: "build"
    },
      {
      status: "Pending",
      task: "kuild"
    },
      {
      status: "Pending",
      task: "build"
    },
      {
        status: "Pending",
        task: "build"
    },
      {
         status: " Pending",
         task: "Lorem ipsum dolor sit amet consec"
    },
  ])
  
    // const falsema = 

    
    // console.log(falsema)
    // console.log(Task)
    

    const checkAll = (e) => {
   
      setTask((prev)=> prev.map((e)=>{
      //   if(e.status == "success"){
      //     e.status = "Pending"
      //     return e
      //   }
      // else{
        e.status = "Done"
        return e
      // }
     
      }))

        setTimeout(() => {
         e.target.checked = false
        }, 900);
        

      // setIsChecked(true)
      // setIsChecked((prevChecked) => {
      //   // Toggle the checkbox state
      //   const newState = !prevChecked;
  
      //   // Set a timeout to revert the state after 2 seconds
      //   setTimeout(() => {
      //     setIsChecked(prevChecked); // Revert to original state
      //   }, 900);
      //   return newState;
      // });
    
    }
    const [Search, setSearch] = useState(0)
    const handleSearch = (e) =>{
      // const filterSearchEmployees = e.target.value
      const filterSearchEmployeesLowercase = e.target.value.toLowerCase()
      // setSearchInput(filterSearchEmployees);
      if (filterSearchEmployeesLowercase.trim() == "") {
        setSearch(0)
        setTask2(Task)
      } else {
        const filterEmployees =  Task2.filter((e)=> e.task.toLowerCase().includes(filterSearchEmployeesLowercase))
        if (filterEmployees.length < 1 ) {
          setSearch(2)
        } else {
          setSearch(1)
          setTask2(filterEmployees)
        }
      }
    }

    useEffect(() => {
      setTask(Task.sort((a, b) => a.status - b.status))
      setTask2(Task2.sort((a, b) => a.status - b.status))
      console.log(Task , "Task")
    }, [Task])
    

  return (
    <TaskBody>
        <TaskTop>
            { 
              Search == 0 && Task.length >= 2 ? 
                <h1>Tasks ({Task.length}) </h1>
              : Search == 1 && Task2.length >= 2 ?

              <h1>Tasks ({Task2.length}) </h1>
              : Search == 0 && Task2.length  < 2 ?

              <h1>Tasks ({Task2.length}) </h1>
              : Search == 1 && Task2.length <  2 ?

              <h1>Tasks ({Task2.length}) </h1>
              :
              <h1>Tasks (0) </h1>

            }
            <TaskSearchBar>
              <BiSearch size={21} color='#3d3d3f'/> 
              <input type="text" placeholder='Search for task' onChange={handleSearch}/>
            </TaskSearchBar>
        </TaskTop>
        <TaskNav>
        <input type="checkBox" 
        // checked={isChecked}
          onChange={checkAll} />
            <Name>
                <NavTop>
                    <h5>Names </h5>
                </NavTop>
              
            </Name>
            <TaskA>
            <NavTop>
            <h5>Tasks</h5></NavTop>
            </TaskA>
            <JobTitle>
            <NavTop><h5>Job Title </h5></NavTop>
            </JobTitle>
            <Status>
            <NavTop>
            <h5>status </h5></NavTop>
            </Status>
        </TaskNav>
        <TasksWrapper>
        {
              Search == 0 ? 
              <>
                  {
            Task.map((e, i)=>(
              <TaskCard e={e} i={i} key={i} Task={Task} setTask={setTask} Task2={Task2} setTask2={setTask2}  />
            ))
        }
              </>
              : Search == 1 ?
                <>
                  {
            Task2.map((e, i)=>(
              <TaskCard e={e} i={i} key={i} Task2={Task2} setTask2={setTask2} />
            ))
        }
                </>
                : Search == 2 ?
                 <TaskCardEmpty>
                  no such task hasn't been currently assigned to an employee
              </TaskCardEmpty>
              : null
             }
        </TasksWrapper>
       
    </TaskBody>
  )
}

export default AllTaskPage