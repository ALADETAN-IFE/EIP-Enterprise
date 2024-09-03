import React, { useEffect, useState } from 'react'
import {Name,
    TaskA,StatusDiv,JobTitle,Status,
    NavBottom,MainBody} from './TaskCardStyle'
    import { IoCheckbox, IoCheckboxOutline } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { keyframes } from 'styled-components';

const TaskCard = ({e, i, Task, Task2, setTask, setTask2}) => {
    

    const setchecked = (stat, ind) =>{
        setTask((prev)=> prev.map((e, i)=>{
            if(i == ind){
                e.status = stat
                return e
            }
          else{
            return e
          }
         
          }))
    }

    // useEffect(() => {

    //     if (e.status == "success") {
    //         const removeSuccessTask = Task.filter(task => task.status !== "success")
    //         setTimeout(() => {
    //             setTask(removeSuccessTask)
    //         setTask2(removeSuccessTask)
    //           }, 950);
            
    //     }
    // }, [Task])
    const sortr = [1, 7832, 32,0].sort((a, b) => a- b)
    
    // console.log(sortr, "a")
  return (
    <MainBody className={ e.status == "Done" ? "removeTaskCard" : null}>
    {
        e.status == "Done" ? 
            <IoCheckbox style={{cursor: "pointer", color: "green"}} onClick={()=> setchecked("pending", i)}/>
        : <MdOutlineCheckBoxOutlineBlank style={{cursor: "pointer"}} onClick={()=> setchecked("Done", i)}/>

    }
{/* <input type='checkbox' style={{background:'green'}} /> */}
    <Name>
        <NavBottom>
            <h3>Ugwu Princess Onyinyechi</h3> </NavBottom>
      
    </Name>
    <TaskA>
    <NavBottom>
        {e.task}
    </NavBottom>
    </TaskA>
    <JobTitle>
        <NavBottom> $650000.000 </NavBottom>
    </JobTitle>
    <Status>
    <NavBottom>
    {
         e.status == "Done" ? 
            <StatusDiv succ>{e.status}</StatusDiv>
        : <StatusDiv >{e.status}</StatusDiv>

    }
    
    </NavBottom>
    </Status>
</MainBody>
  )
}

export default TaskCard