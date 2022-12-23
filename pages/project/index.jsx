import React from 'react'

import Container from '../../src/components/common/Container'
import Contents from '../../src/components/common/Contents'
import Main from '../../src/components/common/Main'
import Title from '../../src/components/common/Title'
import ProjectList from '../../src/components/project/ProjectList'
import SlideWrap from '../../src/components/project/SlideWrap'



export default function Project() {
  return (
    <Main>
      <Container>
        <Title>Project</Title>
        <Contents>
          <ProjectList>
            <SlideWrap/>
          </ProjectList>
        </Contents>
      </Container>
    </Main>
  )
}
