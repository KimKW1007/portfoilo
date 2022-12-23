import React from 'react'
import styled from 'styled-components'

const CenterBox = styled.div`
  position:relative;
  z-index:2;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap : wrap;
`


export default function CenterTextBox({children}) {
  return (
    <CenterBox>
        {children}
    </CenterBox>
  )
}
