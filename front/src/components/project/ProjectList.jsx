import React from 'react'
import styled from 'styled-components'

const ProjectListBox = styled.div`
  display:flex;
  width:100%;
  height:100%;
`

export default function ProjectList({children}) {
  return (
    <ProjectListBox>{children}</ProjectListBox>
  )
}

