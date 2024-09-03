import styled from "styled-components";
// display: flex;
// align-items: center;
// justify-content:center;
// flex-direction: column;

// export const EmployeesPageMainBody = styled.div`
//     width: 100%;
//     height: 100vh;
// `



export const AddEmployeesBtn = styled.button`
   min-width: 150px;
   min-height: 50px;
   background: #EB5928;
   border-radius: 5px;
   padding: 5px;
   border:none;
   outline:none;
   font-size: 18px;
   text-align: center;
   color: white;
   cursor: pointer;
   align-self: right;
   
`
export const AddEmployeesBtnHolder = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content:center;
   color: white;
   cursor: pointer;
   /* gap: 10px; */
`
export const AddEmployeesInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid black;
    outline: none;
    border-radius: 5px;
    padding: 5px;
`
export const AddEmployeesLabel = styled.label`
    width: 100%;
    font-size: 18px;
`

export const InputHolder = styled.div`
    width: 100%;
    height: max-content;
    /* background: rgb(197, 67, 67); */
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    gap: 4px;
`
export const AddEmployeesFormHeader = styled.div`
    width: max-content;
    height: 100%;
    /* background: rgb(197, 67, 67); */
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
`

export const AddEmployeesFormWrapper = styled.form`
    min-width: 280px;
    width: 420px;
    height: max-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 28px;
    padding-right: 28px;
    /* background-color: #575799c9; */
    background-color: #575799;
    background-color: #f08c6b;
    background-color: #0a358b;
    background-color: #97a3ec;
    color: white;
    overflow: auto;
    border-radius: 15px;
`
export const AddEmployeesForm = styled.div`
    width: 98%;
    height: 92%;
    overflow: hidden;
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 25px;
    /* background-color: #3d3d3f; */
`