import styled from "styled-components";
import { devices } from "../../Devices";

// export const NavigationBarMainBody = styled.div`
//     width: 10px;
//     height: 10px;
//     background: antiquewhite;
// `
export const LogoutBtn = styled.button`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  gap: ${({closed}) =>  closed ? "0" : "8px" };
  padding:  ${({closed}) =>  closed ? "18px": "14px" };
  cursor: pointer;
  color: red;
  text-decoration: none;
  background-color: transparent;
  border: none;
  outline: none;
`
export const NavigationRoutBarWrapper = styled.a`
    width: 100%;
    /* height: 80px; */

`
export const NavigationRoutBar = styled.div`
    width: 100%;
    min-height: 70px;
    /* background: rgb(14, 117, 216); */
   

`
export const CloseNavigationBar = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    padding: 5px;

`
export const NavigationBarLogo = styled.a`
    width: 50px;
    height: 50px;
    /* background: rgb(11, 117, 216); */
    border-radius: 50%;
`
export const NavigationBarLogoHolder = styled.div`
    width: 100%;
    min-height: 70px;
    /* background: rgb(11, 216, 172); */
    padding: 5px;
    display: flex;
    justify-content: ${({full}) =>  full ? "space-between": "center" };
    align-items: center;
`
export const NavigationBarLogoWrapper = styled.div`
    width: 100%;
    min-height: 70px;
    /* background: rgb(11, 216, 28); */
    display: flex;
    justify-content:center;
    align-items: center;
`
export const NavigationBarMainBodyWrapper = styled.div`
    width: 100%;
    height: max-content;
    /* background: rgb(195, 216, 11); */
    /* background: rgb(11, 117, 216); */
    display: flex;
    flex-direction: column;
    background: #0056b3;
    border-radius: 8px;
    gap:15px;
`
export const NavigationBarMainBody = styled.div`
    min-width: ${({full}) =>  full ? "20vw": "7vw" };
    max-width: ${({full}) =>  full ? "20vw": "7vw" };;
    height: 100vh;
    max-height: 100vh;
    /* background: #F9FAFC; */
    /* background: #007BFF; */
    /* background: #0056b3; */
    /* background-color: #121215; */
    padding: 15px;

    @media screen and (${devices.mobileL}) {
        min-width: ${({full}) =>  full ? "100vw": "12vw" };
        max-width:  ${({full}) =>  full ? "100vw": "12vw" };
    }
`