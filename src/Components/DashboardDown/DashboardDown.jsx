import React from 'react'
import styled from 'styled-components'
import AllTaskPage from '../../Pages/AllTaskPage/AllTaskPage'

const DashboardDown = () => {
    return (
       <DashDown>
            <AllTaskPage/>
       </DashDown>
  )
}

export default DashboardDown

const DashDown = styled.div`
    width: 100%;
    height: 73%;
    /* background: #35a162; */
`