import styled from "styled-components";
import BgForm from "../../assets/IMG/BgForm.jpg"

export const LoginWrapper = styled.div`
width: 100%;
height: 100vh;
/* background:rgba(50, 66, 60); */
/* background-color: #b7cbff9f; */
background: url(${BgForm});
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
export const LoginWrapper2 = styled.div`
/* background:gray; */
/* width: 80%;
height: 90%; */
/* background-color: white; */
width: max-content;
height: max-content;
background: #1c1b1b37;
display: flex;
justify-content: center;
align-items: center;
gap:20px;
backdrop-filter: blur(15px);
padding: 10px;
border-radius: 10px;
`
export const SignUpForm = styled.form`
/* width: 37%;
height: 80%; */
  height: max-content;
  min-width: 320px;
  width: 45vw;
  gap: 20px;
  flex-direction:column;
/* background:red; */

display: flex;
justify-content: center;
/* gap:50px; */
align-items: center;
`
export const Logo = styled.div`
width: 40%;
height: 80%;
background:tan;
background-color: #b7cbff9f;
display: flex;
justify-content: center;
align-items: center;
`
export const Label=styled.label`
 width: 100%;
 flex-direction: column;
 align-items: center;
 display: flex;
 height: 80%;
 /* background-color: pink; */
 justify-content: center;
 gap: 2px;
 p{
  width: 100%;
  padding-left:30px;
  font-size:14px;
  font-weight:400;
  font-family: 'Times New Roman', Times, serif;
 }
`
export const Input = styled.input`
 width:${({Hg})=>(Hg?"90%":"90%")};
 height: ${({Hg})=>(Hg?"100%":"65%")};
 min-height: ${({Hg})=>(Hg?"60px":"60px")};
 border-radius: 4px;
 outline: none;
 border: none;
 background: rgba(128,128,128,0.375);
 background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
 padding-left: 1rem;
 color: white;

  &::placeholder{
    color: white;
  p{
    /* margin-left:30px; */
  }
 }
 &:focus{
    /* background: rgba(128,128,128,0.375); */
    background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
  }
`
export const PasswordDiv = styled.div`
width: 90%;
height: 20%;
background: rgba(128,128,128,0.375);
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
`
export const Inputbody = styled.div`
width: 100%;
height: 20%;
/* background: rgba(128,128,128,0.375); */
/* border-radius: 10px; */
/* background: yellow; */
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;
justify-content: center;
`
export const FormHeader = styled.div`
width: 100%;
height:20%;
display: flex;
align-items: center;
justify-content:center;



/* background: #000; */

h3{
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight:700;
    color:black;
}
`
export const Button = styled.button`
width: 90%;
height: 45px;
min-height: 45px;
background:${({Hg})=>(Hg ? "rgba(53, 53, 53, 0.685)":"blue")};
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
color: white;
border: ${({Hg})=>(Hg?"rgba(53, 53, 53, 0.685)":"65%")};;
border: none;
border-radius: 5px;

&:hover{
    cursor: pointer;
}
`
export const Btncontainer= styled.div`
 width: 100%;
 height: 20%;
 display: flex;
 align-items: center;
 /* padding: 10px; */
 /* background: orange; */
 justify-content: center;
 gap: 50px;
`
export const Forget=styled.div`
 width: 100%;
 height: 10%;
 display: flex;
 align-items: center;
 color: rgba(90, 156, 255, 0.685);
 /* background: pink; */
 padding-left: 30px;
 `



// import styled from "styled-components";

// export const LoginWrapper = styled.div`
// width: 100%;
// height: 100vh;
// background:rgba(50, 66, 60);
// display: flex;
// align-items: center;
// justify-content: center;
// `
// export const LoginWrapper2 = styled.div`
// width: 80%;
// height: 90%;
// /* background:gray; */
// display: flex;
// justify-content: center;
// align-items: center;

// gap:20px;
// `
// export const SignUpForm = styled.form`
// width: 37%;
// height: 80%;
// flex-direction:column;
// /* background:red; */
// display: flex;
// justify-content: center;
// /* gap:50px; */
// align-items: center;
// `
// export const Logo = styled.div`
// width: 40%;
// height: 80%;
// background:tan;
// display: flex;
// justify-content: center;
// align-items: center;
// `
// export const Label=styled.label`
//  width: 100%;
//  flex-direction: column;
//  align-items: center;
//  display: flex;
//  height: 80%;
//  /* background-color: pink; */
//  justify-content: center;
//  gap: 2px;
//  p{
//   width: 100%;
//   padding-left:30px;
//   font-size:14px;
//   font-weight:400;
//   font-family: 'Times New Roman', Times, serif;
//  }
// `
// export const Input = styled.input`
//  width:${({Hg})=>(Hg?"90%":"90%")};
//  height: ${({Hg})=>(Hg?"100%":"65%")};
//  border-radius: 4px;
//  outline: none;
//  border: none;
//  background: rgba(128,128,128,0.375);
//  background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
//  padding-left: 1rem;
//  color: white;

//   &::placeholder{
//     color: white;
//   p{
//     /* margin-left:30px; */
//   }
//  }
// `
// export const PasswordDiv = styled.div`
// width: 90%;
// height: 20%;
// background: rgba(128,128,128,0.375);
// border-radius: 4px;
// display: flex;
// align-items: center;
// justify-content: center;
// `
// export const Inputbody = styled.div`
// width: 100%;
// height: 20%;
// /* background: rgba(128,128,128,0.375); */
// /* border-radius: 10px; */
// /* background: yellow; */
// display: flex;
// flex-direction: column;
// gap: 30px;
// align-items: center;
// justify-content: center;
// `
// export const FormHeader = styled.div`
// width: 100%;
// height:20%;
// display: flex;
// align-items: center;
// justify-content:center;



// /* background: #000; */

// h3{
//     font-size: 30px;
//     font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
//     font-weight:700;
//     color:white;
// }
// `
// export const Button = styled.button`
// width: 39%;
// height: 44%;
// background:${({Hg})=>(Hg ? "rgba(53, 53, 53, 0.685)":"rgb(171, 243, 64)")};
// display: flex;
// align-items: center;
// justify-content: center;
// font-size: 20px;
// font-family: Arial, Helvetica, sans-serif;
// font-weight: 600;
// color: white;
// border: ${({Hg})=>(Hg?"rgba(53, 53, 53, 0.685)":"65%")};;

// &:hover{
//     cursor: pointer;
// }
// `
// export const Btncontainer= styled.div`
//  width: 100%;
//  height: 20%;
//  display: flex;
//  align-items: center;
//  /* padding: 10px; */
//  /* background: orange; */
//  justify-content: center;
//  gap: 50px;
// `
// export const Forget=styled.div`
//  width: 100%;
//  height: 10%;
//  display: flex;
//  align-items: center;
//  color: rgba(90, 156, 255, 0.685);
//  /* background: pink; */
//  padding-left: 30px;
//  `
