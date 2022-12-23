import styled, { keyframes } from "styled-components"


const notFoundAni = keyframes`
50%{background-position: 100%, 0%;}
`

export const NotFoundRoot = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
h2{
  color:#FF8787;
  margin-right: 10px;
  svg{
    width:60px;
  }
}
h3{
  font-size:40px;
  background: linear-gradient(to right, #3a7bd5 , #FF8787, #3a7bd5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 230%;
  background-position: 0%, 0%;
  animation : ${notFoundAni} 2s infinite;
}
`
