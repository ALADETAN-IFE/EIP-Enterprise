import styled from "styled-components";
// export const CheckBox = styled.div``
// task management webapp for companies illustration
export const StatusDiv = styled.div`
width:max-content;
height: max-content;
padding: 10px;
background-color:  ${({succ})=> succ ? "#00ff00": "#e6ff00"};
border-radius: 10px;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`
// export const Profile = styled.div`
// width:50px;
// height: 50px;

// border-radius: 50%;
// background-color: black;
// `
export const MainBody = styled.div`
width: 100%;
min-height: 80px;
/* background-color: blue; */
background: #dcdcdc;
border-radius: 10px;
/* margin-top: 4px; */
display: flex;

justify-content: space-around;
align-items: center;
`

export const NavBottom = styled.div`
width:100%;
height: 100%;
/* background-color: navy; */
display: flex;
justify-content: center;
/* margin:10px; */
white-space: nowrap;
text-overflow: ellipsis;
text-align: left;
overflow: hidden;
gap: 10px;
align-items: center;

span{
    font-size: 30px;
}
`

export const NavTop = styled.div`
width:100%;
height: 100%;
/* background-color: navy; */
display: flex;
justify-content: center;
align-items: center;

span{
    font-size: 30px;
}
`
export const Status = styled.div`
width:10%;
height: 100%;
/* background-color: black; */
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
export const Name = styled.div`
width:25%;
height: 100%;
/* background-color: aliceblue; */


`