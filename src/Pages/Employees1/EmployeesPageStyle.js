import styled from "styled-components";
// display: flex;
// align-items: center;
// justify-content:center;
// flex-direction: column;

// export const EmployeesPageMainBody = styled.div`
//     width: 100%;
//     height: 100vh;
// `
export const CardExplainDetails = styled.div`
    width: 98%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    /* padding-left: 10px; */
    /* padding-right: 50px; */
    /* background-color: #2c64d4; */

    

    p{
        height: 100%;
        width:  20%;
        max-width:  20%;
        display: flex;
        align-items: center;
        justify-content:center;
        /* background-color: #2c64d4; */
        gap: 10px;
    }
`
export const EmployeesCardEmpty = styled.div`
    /* width: 31%;
    height: 250px;
    background-color: #2c64d4;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content:center; */

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
    align-items: center;
    justify-content:center; 
    /* justify-content: space-around; */
    transition: all 350ms ease-in-out;
`
export const EmployeesCardWrapper = styled.div`
    width: 98%;
    height: 86%;
    overflow: auto;
    display: flex;
    // flex-wrap: wrap;
    flex-direction: column;
    // justify-content:center;
    gap: 5px;
    // background-color: rgb(40, 149, 208);
    /* transition: all 1050ms ease-in-out; */

    &::-webkit-scrollbar{
        width:10px;
        background: #fff;
        border-radius:5px;
    }
    &::-webkit-scrollbar-thumb{
        background: #EB5928;
        /* color: black; */
        border-radius:5px;
   }
`
export const EmployeesAdd = styled.button`
   width: 180px;
   min-height: 50px;
   /* background: #EB5928; */
   background: #0056b3; 
   border-radius: 5px;
   border:none;
   outline:none;
   font-size: 18px;
   display: flex;
   align-items: center;
   justify-content:center;
   color: white;
   cursor: pointer;

  
`
export const EmployeesHeadSection = styled.div`
    width: 100%;
    height: 8%;
    /* background-color: rgb(151, 234, 103); */
    display: flex;
    align-items: center;
    justify-content:space-between;
    

    h6{
        font-size: 30px;
        font-weight: 600;
        display: flex;
        gap: 5px;

        span{
            color: #007BFF;
        }
    }
`
export const EmployeesSectionWrapper = styled.div`
    width: 99%;
    height:100%;
    /* background: rgb(197, 67, 67); */
    display: flex;
    align-items: center;
    gap: 30px;
    /* justify-content:center; */
    flex-direction: column;
    padding-top: ${({AddEmployee}) =>  AddEmployee ? "10px": "26px" };
`
export const EmployeesSection = styled.div`
    width: 100%;
    height: 90%;
    /* background-color: rgb(60, 148, 9); */
    display: flex;
    justify-content:flex-end;
    
    padding-right: 5px;
    /* overflow: auto; */
    /* align-items: center; */
    /* justify-content:space-around; */
    /* padding-top: 20px; */
    /* padding-left: 25px; */
`

export const EmployeesSearchBar = styled.div`
    width: 290px;
    /* max-height: 40px; */
    height: 80%;
    /* background-color: #F6A185; */
    background:rgba(150, 145, 145, 0.283);
    display: flex;
    align-items: center;
    justify-content:space-between;
    border-radius: 5px;
    border: 1px solid #007BFF;
    padding: 5px;

    input{
        width: 250px;
        height: 100%;
        padding:4px;
        background:rgba(150, 145, 145, 0.283);
        background:transparent;
        border:none;
        outline:none;
        /* font-size: 45px; */
        /* font-weight: 700; */

        &::placeholder{
            color: #007BFF;
        }
    }
`
export const EmployeesPageHeaderSectionWrapper = styled.div`
    width: 99%;
    height: 80%;
    /* background: rgb(183, 133, 133); */
    display: flex;
    align-items: center;
    justify-content:space-between;

    h3{
        font-size: 45px;
        font-weight: 700;
    }

`
export const EmployeesPageHeaderSection = styled.div`
    width: 100%;
    height: 10%;
    /* background: blue; */
    display: flex;
    justify-content:flex-end;
    padding-right: 5px;
    /* padding-right: 5px; */
    align-items: center;
`
export const EmployeesPageMainBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: #F6A185; */
   
`

export const EmployeesPageMainBody = styled.div`
    width: 100%;
    height: 100vh;
    /* background: #3d3d3f; */
    background: #97949448; 
    background-color: whitesmoke;
    /* background-color: rgb(216, 127, 11); */
`