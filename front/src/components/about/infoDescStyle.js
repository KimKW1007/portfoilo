import styled, { keyframes } from "styled-components"

export const InfoDescBox = styled.div`
margin-top : 80px;
font-size:20px;
line-height: 2;
padding : 0 120px;
word-break:keep-all;
font-weight:500;
@media (max-width: 1600px){
  font-size:1.25vw;
  padding : 0 7vw;
}
@media ${({theme})=> theme.device.d1300}{
  font-size: 18px;
  padding : 0 ;
  text-align:center;
}
`

export const HighLight = styled.i`
user-select:none;
background: linear-gradient(to right, #3a7bd5 , #191654);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight:800;
${({eng, theme})=> eng && `
  font-size:23px;
  font-family: Kanit, sans-serif;
  @media (max-width: 1600px){
    font-size:1.4375vw;
  }
  @media ${theme.device.d1300}{
    font-size: 20px;
  }
`}
`