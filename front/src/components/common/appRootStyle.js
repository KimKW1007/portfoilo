import styled, { keyframes } from "styled-components"

export const RootBox = styled.div`
display:flex;
height:100%;
min-height:600px;
align-items:center;
justify-content: space-evenly;
overflow:hidden;
transition: background .5s;
${({path})=> path === "/skills" && `background : #232830;`}
background : #232830;
@media ${({theme}) => theme.device.d860}{
  height: calc(100% - 60px);
}
`

export const LineI = styled.i`
position: absolute;
z-index : 1;
left: 21%;
top: 0;
width: 1px;
height: 100%;
background: ${({theme})=> theme.colors.lineColor};
filter: blur(4px);
`