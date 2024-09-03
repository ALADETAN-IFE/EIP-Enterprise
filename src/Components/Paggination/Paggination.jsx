import React, { useState, useEffect } from 'react'
import { PagginationBody,PagginationWrapper,RightArrow, LeftArrow,
    NumberPaggination,Pages
 } from './PagginationStyles'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const Paggination = ({pagination}) => {
    const [pages, setPages] = useState([])
    const [showBackArrow, setshowBackArrow] = useState(false)  
    const [showFrontArrow, setshowFrontArrow] = useState(false)  

    const addPagPage = () => {
        for (let index = 1; index <= Math.ceil(pagination.totalCards/pagination.CardsPerPage); index++) {
            pages.push(index)       
        }
    }
    
    useEffect(() => {
        addPagPage()
    }, [pages])
    console.log(pages)
    const controlArrowsShow = () => {
        if (pages.length > 5 && pagination.CurrentPage !== pages.length) {
            setshowFrontArrow(true)
        }else if(pagination.CurrentPage == pages.length){
            setshowFrontArrow(false)
        }
        if (pagination.CurrentPage > 4) {
            setshowBackArrow(true)
        }else{
            setshowBackArrow(false)
        }
    }

    useEffect(() => {
        controlArrowsShow()
    }, [pagination.CurrentPage])
   
    // console.log(pagination.CurrentPage , "pagination.CurrentPage ")
    // console.log(pages.length, "pages.length")
    // console.log(showBackArrow, "showBackArrow")
    // console.log(showFrontArrow, "showFrontArrow")
    // console.log(pagination.datas)
    // console.log(pagination.totalCards, "totalCards")
    // console.log(pagination.CardsPerPage)
    
  
   

    const nextPage = () =>{
        if ( pagination.CurrentPage < Math.ceil(pagination.totalCards/pagination.CardsPerPage)) {
            pagination.setCurrentPage(pagination.CurrentPage + 1)
        } else {
            pagination.setCurrentPage(pagination.CurrentPage)
        }
    }
    const previousPage = () =>{
        if (1 < pagination.CurrentPage) {
            pagination.setCurrentPage(pagination.CurrentPage - 1)
        } else {
            pagination.setCurrentPage(pagination.CurrentPage)
        }
    }
 
    // useEffect(() => {
    //     // if (pagination.CurrentPage > 4) {
    //     //     const newPagination2 = pages.slice((pages.length - 4) , pages.length)
    //     // }
    //     if (pagination.CurrentPage > 4) {
    //         if (pagination.CurrentPage == (pages.length - 4)) {
    //         const newPagination2 = pages.slice((pages.length - 4) ,pages.length)
    //         console.log(newPagination2, "newPagination2")
    //            setPages(newPagination2)
    //         } else{
    //           const newPagination = pages.slice((pagination.CurrentPage - 1) ,( pagination.CurrentPage  + 5) )
    //           console.log(newPagination, "newPagination")
    //                setPages(newPagination)
    //         }
    //     } 
    //     // else{
    //         //     addPagPage()
    //         //     console.log(pages)
    //         //     console.log("newPagination222")
    //         // }
        
     
    // }, [pagination.CurrentPage])
    
  return (
    <PagginationBody>
        <PagginationWrapper>
            {
                showBackArrow ? 
                    <LeftArrow onClick={previousPage}>
                        <BiLeftArrow size={40}/>
                    </LeftArrow>
                : null
            }
            <NumberPaggination>
               {/* {
                pages.map((page, index) =>(
                ))
            } */}
            <Pages 
            // style={pagination.CurrentPage == page ? {background: "blue"}: null}
             key={index} onClick={()=> pagination.setCurrentPage(pagination.CurrentPage)}> {pagination.CurrentPage}</Pages>
            </NumberPaggination>
            {
                showFrontArrow ? 
                    <RightArrow onClick={nextPage}>  
                        <BiRightArrow size={40}/>
                    </RightArrow>
                : null
            }
            
        </PagginationWrapper>
    </PagginationBody>
  )
}

export default Paggination