import styled from "styled-components";


export const TaskCardEmpty = styled.div`
width: 100%;
min-height: 80px;
background: #dcdcdc;
border-radius: 10px;
/* margin-top: 4px; */
display: flex;
font-size: 22px;
justify-content:center;
align-items: center;
`

export const TasksWrapper = styled.div`
width:100%;
height: 80%;
/* background-color: pink; */
display: flex;
flex-direction: column;
gap: 10px;
font-family: popping, sans-serif;
overflow-x: hidden;
overflow-y: auto;

`


export const Status = styled.div`
width:10%;
height: 100%;
/* background-color: blue; */
`

export const JobTitle = styled.div`
width:20%;
height: 100%;
/* background-color: green; */
`
export const TaskA = styled.div`
width:20%;
height: 100%;
/* background-color: red; */

`

export const NavTop = styled.div`
width:100%;
height: 100%;
/* background-color: navy; */
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
/* font-weight:100; */

span{
    font-size: 18px;
}
`

export const Name = styled.div`
width:25%;
height: 100%;
/* background-color: green; */
`
export const CheckBox = styled.div`
width: 40px;
height: 40%;
/* background-color: red; */
`

export const TaskNav = styled.div`
width:100%;
height: 10%;
/* background-color: wheat; */
display: flex;
justify-content: space-around;
align-items: center;


`

export const TaskSearchBar = styled.div`
    width: 290px;
    height: 90%;
    /* background-color: #F6A185; */
    background: #2c64d44b;
    display: flex;
    align-items: center;
    justify-content:space-between;
    border-radius: 5px;
    border: 1px solid #2c64d4;;
    padding: 5px;

    input{
        width: 250px;
        height: 100%;
        padding:4px;
        padding-top: 2px;
        /* background:rgba(0, 123, 255, 0.356); */
        background:transparent;
        border:none;
        outline:none;
        /* font-size: 45px; */
        /* font-weight: 700; */

        &::placeholder{
            color: #3d3d3f;
        }
    }
`
export const TaskTop = styled.div`
width:100%;
height: 14%;
/* background-color: pink; */
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
/* font-family: popping, sans-serif; */

h1{
    font-size: 24px;;
}

`
export const TaskBody = styled.div`
width:100%;
height: 100%;
/* background-color: red; */
/* background: #3d3d3f; */
/* background: whitesmoke; */
overflow: hidden;

`