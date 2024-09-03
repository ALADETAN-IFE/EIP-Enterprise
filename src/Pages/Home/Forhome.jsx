import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Body1 from './Body1'
import Body2 from './Body2'


const Forhome = () => {
  return (
    <Forhomebody>
      <Header/>
   <Body1/>
   <Body2/>
    </Forhomebody>
  )
}

export default Forhome

export const Forhomebody = styled.div`
   width: 100%;
   height: max-content;
   display: flex;
   flex-direction: column;

`
