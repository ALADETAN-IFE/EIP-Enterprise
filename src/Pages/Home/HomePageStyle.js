import styled from 'styled-components'


export const LogoHolder = styled.div`
width:400px;
height: 400px;
 background:linear-gradient(rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0.623)); 

background-position: center;
background-size: contain;
background-repeat: no-repeat;
/* background-color: rebeccapurple; */
border-radius: 10px;
/* overflow: hidden; */
`

export const MainRight= styled.div`
width:30%;
height: 100%;
/* background-color: aqua; */
justify-content: center;
display: flex;
align-items: center;
`
export const Button = styled.button`
width: 130px;
height: 40px;
border-radius: 4px;
border: none;
outline: none;
cursor: pointer;
background-color: #d4d6da;

`
export const LoginChooseButtonHolder = styled.div`
width: max-content;
height: max-content;
display: flex;
gap: 30px;
`
export const LoginButtonHolder = styled.div`
width: max-content;
height: max-content;
display: flex;
align-items: center;
gap: 30px;
padding: 15px;
/* background: goldenrod; */
`
export const MainLeft = styled.div`
width:60%;
height: 100%;
/* background-color: red; */
display: flex;
font-size: 30px;
color: white;
font-family:popping, sans-serif;
flex-direction: column;
justify-content: center;
gap:40px;
/* align-items: center; */
`
export const MainBox = styled.div`
width: 90%;
height: 80%;
background-color: rgba(0, 0, 0, 0.795);
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
border-radius: 10px;
display: flex;
justify-content: space-around;

`
export const Main = styled.div`
width:100%;
height: 100vh;
background-color: #121215;
display: flex;
align-items: center;
justify-content: center;
`