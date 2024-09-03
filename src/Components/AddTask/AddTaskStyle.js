import styled from "styled-components";
// display: flex;
// align-items: center;
// justify-content:center;
// flex-direction: column;

// export const EmployeesPageMainBody = styled.div`
//     width: 100%;
//     height: 100vh;
// `


export const AddTaskBtn = styled.button`
   min-width: 150px;
   min-height: 50px;
   background: #EB5928;
   border-radius: 5px;
   padding: 5px;
   border:none;
   outline:none;
   font-size: 20px;
   text-align: center;
   color: white;
   cursor: pointer;
   align-self: right;
   
`
export const AddTaskBtnHolder = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content:center;
   /* background: rgb(197, 67, 67); */
   color: white;
   cursor: pointer;
   /* gap: 10px; */
`
export const AddTaskInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid black;
    outline: none;
    border-radius: 5px;
    padding: 5px;
`

export const AddTaskLabel = styled.label`
    width: 100%;
    font-size: 18px;
`
export const AddTaskInputHolder = styled.div`
      width: 100%;
    height: max-content;
    /* background: rgb(197, 67, 67); */
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 15px;
`


export const AddTaskFormWrapper = styled.div`
    min-width: 280px;
    width: 450px;
    height: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 12px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgba(148, 173, 134, 0.5);
    justify-content: space-around;
    border-radius: 15px;
`
export const AddTaskForm = styled.div`
    width: 98%;
    height: 92%;
    overflow: hidden;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 25px;
    /* background-color: rgb(40, 149, 208); */
`