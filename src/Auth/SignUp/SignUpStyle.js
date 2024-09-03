import styled from "styled-components"
import BgForm from "../../assets/IMG/BgForm.jpg"

export const MainBody = styled.div`
width: 100%;
height: 100vh;
background-color: #b7cbff9f;
/* background: url(${BgForm}); */
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;


`
export const PasswordDiv = styled.div`
width: 90%;
height: 58px;
background: rgba(128,128,128,0.375);
border-radius: 4px;
display: flex;
align-items: center;
justify-content: space-between;

&:focus{
    background: rgba(128,128,128,0.375);
  }
`
export const Wrapper= styled.div`
width: max-content;
height: max-content;
/* background: red; */
/* background-color: white; */
/* background: #1c1b1b37; */
/* backdrop-filter: blur(15px); */
background: #1e1e1e;
padding: 20px 20px 25px 15px;
display: flex;
align-items: center;
gap: 20px;
/* padding: 10px; */
justify-content: center;
border-radius: 10px;
`
export const Logo= styled.div`
width: 40%;
height: 80%;
background:#b7cbff9f;
display: flex;
align-items: center;
justify-content: center;
`
export const SignUpForm= styled.form`
/* width: 40%;
height: 90%; */
height: max-content;
    min-width: 320px;
    width: 45vw;
    gap: 20px;
/* background: yellow; */
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
export const Headlogo= styled.div`
width: 100%;
height: 10%;
/* background: pink; */
display: flex;
align-items: center;
justify-content: center;

h2{
  font-size: 30px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
}
`
export const Input = styled.input`
 width:${({Hg})=>(Hg?"90%":"90%")};
 min-height: ${({Hg})=>(Hg?"60px":"60px")};
 height: ${({Hg})=>(Hg?"60px":"60px")};
 border-radius: 4px;
 outline: none;
 /* align-items:self-start; */
 border: none;
 /* background: rgba(128,128,128,0.375); */
 background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
 padding-left: 1rem;
 color: white;

  &::placeholder{
    color: white;
  p{
    font-size: 1px;
  }
  &:focus{
    /* background: rgba(128,128,128,0.375); */
    background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
  }
 }
 `
 export const Label=styled.label`
 width: 100%;
 flex-direction: column;
 align-items: center;
 display: flex;
 height: 30%;
 /* background-color: pink; */
 gap: 2px;
 p{
  width: 100%;
  padding-left:30px;
  font-size:14px;
  font-weight:400;
  font-family: 'Times New Roman', Times, serif;
 }
`
export const PassWordCheckDiv = styled.div`
width: 100%;
height:max-content;
color:white;
gap: 20px;
background: transparent;
padding-left:30px ;
display: flex;
font-size: 10px;
flex-direction: row;

`
export const Inputdiv = styled.div`
width: 100%;
height: max-content;
align-items:center;
justify-content: center;
gap: 20px;
/* background: purple; */
display: flex;
flex-direction: column;
/* margin-top:10px; */
`

export const Btncontainer= styled.div`
 width: 100%;
 height: 8%;
 display: flex;
 align-items: center;
 margin-top:20px;
 /* padding: 10px; */
 /* background: orange; */
 justify-content: center;
 gap: 110px;
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
border: none;
border-radius: 5px;

&:hover{
    cursor: pointer;
}
`
export const Text =styled.div`
 width: 100%;
 height: 15%;
 display: flex;
 align-items: center;
 /* background: pink; */
 /* background: pink; */
 padding-left: 30px;
 
 `

// `
// // export const Header= styled.header`
// // width: 100vw;
// // height: 12vh;
// // padding: 1rem;
// // overflow-y: hidden;
// // h3{
// //   font-size: 3rem;
// //   font-weight: 900;
// //   background: linear-gradient(to bottom right, #f32170, #ff6b08,#cf23cf, #eedd44);
// //   /* -webkit-text-fill-color: transparent;
// //   -webkit-background-clip: text;
// //  -webkit-text-stroke: 2px white;  */
// // }
// // `
// // export const Wrapper = styled.div`
// // width: 100vw;
// // height: 88vh;
// // display: flex;
// // justify-content: center;
// // `
// // export const  SignUpForm = styled.div`
// // width: 30vw;
// // height: 90%;
// // background:rgba(0,0,0,0.825);
// // padding: 1rem;
// // display: flex;
// // flex-direction: column;
// // gap: 1rem;

// // `
// // export const FormHeader = styled.div`
// // width: 100%;
// // height:7%;

// // h3{
// //     font-size: 30px;
// //     color:white;
// // }
// // `
// // export const Input = styled.input`
// //  width:${({Hg})=>(Hg?"90%":"100%")};
// //  height: ${({Hg})=>(Hg?"100%":"10%")};
// //  border-radius: 10px;
// //  outline: none;
// //  border: none;
// //  background: rgba(128,128,128,0.375);
// //  background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
// //  padding-left: 1rem;
// //  color: white;

// //   &::placeholder{
// //     color: white;
// //  }
// // `
// // export const PasswordDiv = styled.div`
// // width: 100%;
// // height: 10%;
// // background: rgba(128,128,128,0.375);
// // border-radius: 10px;
// // display: flex;
// // align-items: center;
// // justify-content: center;
// // `
// // export const PassWordCheckDiv = styled.div`
// // width: 100%;
// // height: max-content;
// // color:white;
// // display: flex;
// // flex-direction: column;

// // `
// // export const Button = styled.button`
// // width: 100%;
// // height: 10%;
// // background:${({Hg})=>(Hg ? "rgba(128,128,128,0.375)":"red")};
// // display: flex;
// // align-items: center;
// // justify-content: center;
// // font-size: 20px;
// // font-family: Arial, Helvetica, sans-serif;
// // font-weight: 600;
// // color: white;
// // border: none;

// // &:hover{
// //     cursor: pointer;
// // }
// // `

// // export const Or = styled.div`
// // color: white;

// // h3{
// //     text-align: center;
// // }
// `

// // export const Text = styled.div`
// // width: 100%;
// // display: flex;
// // justify-content:${({Bg})=>(Bg? "center":"flex-end")};
// // color: white;

// // span{
// //     color:red;
// //     padding-left:3px;

// //     &:hover{
// //         cursor: pointer;
// //         text-decoration: underline;
// //         transform: all 350ms ease-in-out;
// //     }
// // }
// // `
// // export const Input = styled.div`

// // `

// import styled from "styled-components"
// // import Bg from "../assets/images/bg.png"

// export const MainBody = styled.div`
// width: 100vw;
// height: 100vh;
// background:rgba(50, 66, 60);
// background-repeat: no-repeat;
// background-size: cover;
// display: flex;
// align-items: center;
// justify-content: center;
// `
// export const PasswordDiv = styled.div`
// width: 90%;
// height: 58px;
// background: rgba(128,128,128,0.375);
// border-radius: 4px;
// display: flex;
// align-items: center;
// justify-content: center;
// `
// export const Wrapper= styled.div`
// width: 80%;
// height: 90%;
// /* background: red; */
// display: flex;
// align-items: center;
// gap: 20px;
// justify-content: center;
// `
// export const Logo= styled.div`
// width: 40%;
// height: 80%;
// background: green;
// display: flex;
// align-items: center;
// justify-content: center;
// `
// export const SignUpForm= styled.form`
// width: 40%;
// height: 90%;
// /* background: yellow; */
// display: flex;
// flex-direction:column;
// align-items: center;
// justify-content: center;
// `
// export const Headlogo= styled.div`
// width: 100%;
// height: 10%;
// /* background: pink; */
// display: flex;
// align-items: center;
// justify-content: center;

// h2{
//   font-size: 30px;
//   color: white;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   font-weight: 700;
// }
// `
// export const Input = styled.input`
//  width:${({Hg})=>(Hg?"90%":"90%")};
//  height: ${({Hg})=>(Hg?"60px":"60px")};
//  border-radius: 4px;
//  outline: none;
//  /* align-items:self-start; */
//  border: none;
//  background: rgba(128,128,128,0.375);
//  background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
//  padding-left: 1rem;
//  color: white;

//   &::placeholder{
//     color: white;
//   p{
//     font-size: 1px;
//   }
//  }
//  `
//  export const Label=styled.label`
//  width: 100%;
//  flex-direction: column;
//  align-items: center;
//  display: flex;
//  height: 30%;
//  /* background-color: pink; */
//  gap: 2px;
//  p{
//   width: 100%;
//   padding-left:30px;
//   font-size:14px;
//   font-weight:400;
//   font-family: 'Times New Roman', Times, serif;
//  }
// `
// export const PassWordCheckDiv = styled.div`
// width: 100%;
// height: 0px;
// color:white;
// gap: 20px;
// background: #000;
// padding-left:30px ;
// display: flex;
// font-size: 10px;
// flex-direction: row;

// `
// export const Inputdiv = styled.div`
// width: 100%;
// height: max-content;
// align-items:center;
// justify-content: center;
// gap: 20px;
// /* background: purple; */
// display: flex;
// flex-direction: column;
// margin-top:10px;
// `

// export const Btncontainer= styled.div`
//  width: 100%;
//  height: 8%;
//  display: flex;
//  align-items: center;
//  margin-top:20px;
//  /* padding: 10px; */
//  /* background: orange; */
//  justify-content: center;
//  gap: 110px;
// `

// export const Button = styled.button`
// width: 34%;
// height: 30px;
// background:${({Hg})=>(Hg ? "rgba(53, 53, 53, 0.685)":"rgb(171, 243, 64)")};
// display: flex;
// align-items: center;
// justify-content: center;
// font-size: 20px;
// font-family: Arial, Helvetica, sans-serif;
// font-weight: 600;
// color: white;
// border: none;;

// &:hover{
//     cursor: pointer;
// }
// `
// export const Text =styled.div`
//  width: 100%;
//  height: 15%;
//  display: flex;
//  align-items: center;
//  /* background: pink; */
//  /* background: pink; */
//  padding-left: 30px;
 
//  `

// // `
// // // export const Header= styled.header`
// // // width: 100vw;
// // // height: 12vh;
// // // padding: 1rem;
// // // overflow-y: hidden;
// // // h3{
// // //   font-size: 3rem;
// // //   font-weight: 900;
// // //   background: linear-gradient(to bottom right, #f32170, #ff6b08,#cf23cf, #eedd44);
// // //   /* -webkit-text-fill-color: transparent;
// // //   -webkit-background-clip: text;
// // //  -webkit-text-stroke: 2px white;  */
// // // }
// // // `
// // // export const Wrapper = styled.div`
// // // width: 100vw;
// // // height: 88vh;
// // // display: flex;
// // // justify-content: center;
// // // `
// // // export const  SignUpForm = styled.div`
// // // width: 30vw;
// // // height: 90%;
// // // background:rgba(0,0,0,0.825);
// // // padding: 1rem;
// // // display: flex;
// // // flex-direction: column;
// // // gap: 1rem;

// // // `
// // // export const FormHeader = styled.div`
// // // width: 100%;
// // // height:7%;

// // // h3{
// // //     font-size: 30px;
// // //     color:white;
// // // }
// // // `
// // // export const Input = styled.input`
// // //  width:${({Hg})=>(Hg?"90%":"100%")};
// // //  height: ${({Hg})=>(Hg?"100%":"10%")};
// // //  border-radius: 10px;
// // //  outline: none;
// // //  border: none;
// // //  background: rgba(128,128,128,0.375);
// // //  background: ${({Hg})=>(Hg?"transparent":"rgba(128,128,128,0.375)")};
// // //  padding-left: 1rem;
// // //  color: white;

// // //   &::placeholder{
// // //     color: white;
// // //  }
// // // `
// // // export const PasswordDiv = styled.div`
// // // width: 100%;
// // // height: 10%;
// // // background: rgba(128,128,128,0.375);
// // // border-radius: 10px;
// // // display: flex;
// // // align-items: center;
// // // justify-content: center;
// // // `
// // // export const PassWordCheckDiv = styled.div`
// // // width: 100%;
// // // height: max-content;
// // // color:white;
// // // display: flex;
// // // flex-direction: column;

// // // `
// // // export const Button = styled.button`
// // // width: 100%;
// // // height: 10%;
// // // background:${({Hg})=>(Hg ? "rgba(128,128,128,0.375)":"red")};
// // // display: flex;
// // // align-items: center;
// // // justify-content: center;
// // // font-size: 20px;
// // // font-family: Arial, Helvetica, sans-serif;
// // // font-weight: 600;
// // // color: white;
// // // border: none;

// // // &:hover{
// // //     cursor: pointer;
// // // }
// // // `

// // // export const Or = styled.div`
// // // color: white;

// // // h3{
// // //     text-align: center;
// // // }
// // `

// // // export const Text = styled.div`
// // // width: 100%;
// // // display: flex;
// // // justify-content:${({Bg})=>(Bg? "center":"flex-end")};
// // // color: white;

// // // span{
// // //     color:red;
// // //     padding-left:3px;

// // //     &:hover{
// // //         cursor: pointer;
// // //         text-decoration: underline;
// // //         transform: all 350ms ease-in-out;
// // //     }
// // // }
// // // `
// // // export const Input = styled.div`

// // // `