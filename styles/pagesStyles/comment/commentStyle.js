import styled, { keyframes } from "styled-components"

export const FormCloseBox = styled.div`
position:absolute;
right: 20px;
top: 10px;
width: 30px;
height: 30px;
z-index:3;
border-radius:50%;
padding: 5px;
background: #fff;
box-shadow: 0 0 10px 5px #FFDEB4;
display:flex;
overflow:hidden;
transition: transform .8s, box-shadow .8s;
transform:rotate(0deg);
button{
  width:100%;
  height:100%;
  background: inherit;
  margin-top: 1px;
}
&.onForm{
  transform:rotate(180deg);
  box-shadow: 0 0 10px 5px #C1EFFF;
}
`

export const FormOutBox = styled.div`
overflow:hidden;
border: 1px solid #fff;
border-radius: 8px;
height:${({formHeight})=> formHeight}px;
transition: height 1s , padding .5s, border 1s;
${({isOnForm})=> !isOnForm && `
  height: 52px;
  border: 1px solid #393e46;
  `}
  span {
    font-size: 16px;
    color: #fff;
  }
`