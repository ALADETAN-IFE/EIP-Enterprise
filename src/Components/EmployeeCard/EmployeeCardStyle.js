import styled from "styled-components";
// display: flex;
// align-items: center;
// justify-content:center;
// flex-direction: column;


export const EmployeesCardBottomDown = styled.div`
    width: 100%;
    height: 50%;
    /* background-color: #FFC90E; */
    display: flex;
    justify-content:space-between;
    flex-direction: column;

`
export const EmployeesCardBottomUp = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    /* background-color: #FFC90E; */
    justify-content:space-between;
`
export const EmployeesCardBottom = styled.div`
    /* width: 100%;
    height: 55%; */
    width: 10%;
    height: 100%;
    background-color: #fff;
    /* background-color: #EB5928; */
    /* background-color: #EB5928; */
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-direction: column;
    gap: 4px;
`
export const EmployeesCardDepartmentHolder = styled.div`
    width: max-content;
    height: max-content;
    /* background-color: #fff; */
    padding: 2px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;

    span{
        color: rgb(206, 211, 214);
    }
`
export const EmployeesCardDateAddedHolder = styled.div`
    width:  max-content;
    height: 100%;
    /* background-color: #fff; */
    padding: 2px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;

    span{
        color: rgb(206, 211, 214);

    }
`
export const EmployeesCardPhoneNumber = styled.div`
    width:  20%; 
    max-width:  20%;
    height: 100%;
    /* background-color: #fff; */
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 12px;
   

    span{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

`
export const EmployeesCardEmail = styled.div`
    width:  20%;
    max-width:  20%;
    height: 100%;
    /* background-color: #fff; */
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 12px;
    white-space: nowrap;
   text-overflow: ellipsis;
`
export const EmployeesCardName = styled.div`
    width:  20%;
    max-width:  20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    /* background-color: gold; */
    padding: 2px;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const EmployeesCardImageHolder = styled.div`
    width: 70px;
    height: 70px;
    /* background-color: #880015; */
    background-color: #fff;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content:center;
    /* overflow: hidden; */
`

export const GiveTask = styled.button`
    width: 100%;
    height: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
`

export const RemoveEmployee = styled.button`
    width: 100%;
    height: 50%;
    background-color:transparent; 
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
`

export const SeeMoreHolder = styled.div`
    width: max-content;
    height: 80px;
    background-color: #3d3d3f;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-direction: column;
    position: absolute;
    top:60%;
    right: 0;
    z-index: 2;
    padding: 5px;
    gap: 5px;
`

export const EmployeesCardImageHolderTop = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content:space-between;
   
`

export const EmployeesCardTop = styled.div`
    /* width: 100%;
    height: 40%; */
    width: 10%;
    height: 100%;
    /* background-color: #880015; */
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap: 5px;
`

export const EmployeesCardWapper = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: #A5FAFC; */
    display: flex;
   /* flex-direction: column; */
   justify-content:space-between;
   padding-left: 4px;     
   align-items: center;
   position: relative;
`
export const EmployeesCard = styled.div`
    /* width: 30%;
    height: 260px;
    background-color: #F9FAFC;
    /* background-color: #2c64d4; */
    /* background-color: #f08c6b; */
    /* background-color: green;
    border-radius: 10px;
    padding: 8px; */
    
    width: 100%;
    height: 20%;
    /* min-height: 80px; */
    /* background-color: blue; */
    background: #f08c6b;
    background: #007BFF; 
    /* margin-top: 4px; */
    display: flex;
    border-radius: 10px;
    /* justify-content: space-around; */
    transition: all 350ms ease-in-out;
`