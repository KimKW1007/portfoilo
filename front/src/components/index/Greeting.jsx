import styled, { keyframes } from "styled-components"

const greetingBlur = keyframes`
  100%{
    filter:blur(3px);
  }
`

const GreetingBox = styled.div`
  position:absolute;
  z-index:1;
  left:0;
  top:0;
  width:100%;
  min-width: 250px;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  font-size: 130px;
  p{
    color:${props=> props.theme.colors.GreetingColor};
    font-weight:bold;
    animation: ${greetingBlur} 3s forwards;
  }
  p:nth-child(2){
    text-align:right;
  }
  @media ${({theme})=> theme.device.d800}{
    font-size: 16.25vw;
  }
  @media ${({theme})=> theme.device.d350}{
    font-size: 81px;
  }
`

export default function Greeting({chiledren}) {
  return (
    <GreetingBox>
      <p>Hi!</p>
      <p>Nice to meet you</p>
    </GreetingBox>
  )
}
