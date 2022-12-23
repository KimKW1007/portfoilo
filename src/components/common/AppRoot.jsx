import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components'
import { LineI, RootBox } from './appRootStyle';


export default function AppRoot({children}) {
  const {pathname} = useRouter();
  return (
    <RootBox path={pathname}>
      <LineI />
      {children}
    </RootBox>
  )
}
