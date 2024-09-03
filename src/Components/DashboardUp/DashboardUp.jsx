import React from 'react'
import styled from 'styled-components'
import { MoonLoader } from "react-spinners";
import { BsListTask } from 'react-icons/bs';
import { GrUserWorker } from 'react-icons/gr';
import { GrTask } from 'react-icons/gr';

const DashboardUp = ({datas, loading, totalTaskReduce}) => {
    console.log(datas)
     {/* {e.cardIcons} */}
                             {/* <{e.cardIcons}/> */}
                                {/* {e.cardIcons} */}
    const cards =[
        {
            cardType: "Employees",
            cardIcons: <GrUserWorker  size={28}/>
        },
        {
            cardType: "Task Assigneed",
            cardIcons: <BsListTask  size={28}/>
        },
        {
            cardType: "Completed Task",
            cardIcons: <GrTask  size={23}/>
        },
]
    const cards1 =[
        {
            cardType: datas?.totalEmployees > 1 ? "Employees" :  "Employee",
            cardTypeValue: datas == undefined ? 0 : datas?.totalEmployees , 
            cardIcons: <GrUserWorker  size={28}/>
        },

        {
            cardType: "Task Assigneed",
            cardTypeValue:  datas == undefined ? 0 : totalTaskReduce?.length , 
            cardIcons: <BsListTask  size={28}/>
        },
        {
            cardType: "Completed Task",
            cardTypeValue: 0 , 
            cardIcons: <GrTask  size={23}/>
        },
]


  return (
    <Top>
        <CardsWrapper>
            {
                loading?
                    <>
                       {
                            cards.map((e, i)=>(
                                <Cards key={i}>
                                 <CardsLeft>
                                 <span>{e.cardType}</span>
                                 <br></br>
                                    <p><MoonLoader size={20}/></p>
                                </CardsLeft>
                                <CardsIcon>
                                    {e.cardIcons}
                                </CardsIcon>
                                </Cards>
                            ))
                        }
                    </>
                    : 
                     <>
                    {
                         cards1.map((e, i)=>(
                             <Cards key={i}>
                              <CardsLeft>
                              <p>{e.cardTypeValue}</p>
                                 <span>{e.cardType}</span>
                             </CardsLeft>
                             <CardsIcon>
                                 {e.cardIcons}
                            
                             </CardsIcon>
                             </Cards>
                         ))
                     }
                 </>
            }

             
        </CardsWrapper>
        
    </Top>
  )
}

export default DashboardUp


const CardsIcon = styled.div`
width:25%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
/* background-color: red; */
    /* @media screen and (max-width: 445px) {
        width:100%;
    } */
`

const CardsLeft = styled.div`

width:75%;
height: 100%;
/* background-color: aqua; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

p{
    font-size: 20px;
    font-weight: bolder;

    /* @media screen and (max-width: 381px) {
        font-size: 28px;
    } */
}
span{
    font-size: 14px;
/*     
    @media screen and (max-width: 321px) {
        font-size: 14px;
    } */
    /* @media screen and (max-width: 441px) {
      
    }
    @media screen and (max-width: 389px) {
        font-size: 13px;
    } */
}

/* @media screen and (max-width: 445px) {
        width:100%;
        order: 1;
    } */
`
const Cards = styled.div`
width:30%;
height: 100%;
/* background-color: #f08c6b; */
display: flex;
justify-content: space-between;
/* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
/* box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px; */
box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
border-radius: 10px;
overflow: hidden;

    /* @media screen and (max-width: 768px) {
        width:30%;
        height: 200px;
    }
    @media screen and (max-width: 688px) {
        width:40%;
        height: 170px;
    }
    @media screen and (max-width: 451px) {
        width:45%;
        height: 150px;
    }
    @media screen and (max-width: 445px) {
        width:45%;
        height: 150px;
        flex-direction: column;
    }
    @media screen and (max-width: 381px) {
        width:44%;
        height: 120px;
    }
    @media screen and (max-width: 321px) {
        width:44%;
        height: 130px;
    } */
`
const CardsWrapper = styled.div`
width:100%;
height: 100%;
/* background-color: blue; */
/* border-radius: 5px; */
display: flex;
gap:30px;
/* flex-wrap: wrap; */
/* justify-content: row; */
justify-content: space-between;
align-items: center;
`

const Top = styled.div`
width:100%;
height: 15%;
min-height: 15%;
/* background-color: aqua; */
display: flex;
gap:10px;
justify-content: center;
align-items: center;
`