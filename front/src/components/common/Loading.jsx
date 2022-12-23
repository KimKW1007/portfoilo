import React from 'react'
import styled, { keyframes } from 'styled-components';
import { ArrowRepeat } from "@styled-icons/bootstrap";
export const LoadingMotion = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;


const LoadingBox = styled.div`
  width:100%;
  height:100%;
  font-size: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  svg{
    color:#fff;
    width: 40px;
    margin-right:10px;
    animation: ${LoadingMotion} 2s infinite;
  }
`

export default function Loading() {
  return (
    <LoadingBox><ArrowRepeat/>Loading...</LoadingBox>
  )
}
