import styled from "styled-components";
// display: flex;
// align-items: center;
// justify-content:center;
// flex-direction: column;


export const Pages = styled.button`
    min-width: 45px;
    height: 45px;
    /* background-color:palegoldenrod; */
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 8px;
    cursor: pointer;
`

export const NumberPaggination = styled.div`
    max-width: 250px;
    height: 45px;
    /* background-color:palegoldenrod; */
    display: flex;
    /* align-items: center; */
    /* justify-content:center; */
    
    gap:5px;
    overflow: hidden;
    /* display: -webkit-box; */
  /* -webkit-line-clamp: 7; */
  /* -webkit-box-orient: vertical; */

`

export const LeftArrow = styled.button`
    width: 45px;
    height: 45px;
    /* background-color:palegoldenrod; */
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 8px;
    cursor: pointer;
`

export const RightArrow = styled.button`
    width: 45px;
    height: 45px;
    /* background-color:palegoldenrod; */
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 8px;
    cursor: pointer;
`
export const PagginationWrapper = styled.div`
    width: 100%;
    height: 85%;
    /* background-color:green; */
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    align-items: center;
`

export const PagginationBody = styled.div`
    width: 98%;
    height: 14%;
    background-color:white;
    /* background-color: #EB5928;  */
    display: flex;
    align-items: center;
`