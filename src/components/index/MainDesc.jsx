import styled, { keyframes } from "styled-components"

const opacityAni = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`

const DescBox = styled.div`
  animation:${opacityAni} 3s forwards;
  position: relative;
  transition: top .3s;
  > div{
    position: relative;
    z-index:2;
  }
  h3{
    font-size:20px;
    font-weight:bold;
    padding: 0 0 ${({theme})=>theme.paddings.p24};
  }
  p{
    line-height:1.2;
  }
  @media ${({theme})=> theme.device.d1280}{
    position:absolute;
    right: 0;
    top:120px;
    text-align: right;
  }
  @media ${({theme})=> theme.device.d603}{
    top:0px;
  }
`
export default function MainDesc({children}) {
  return (
    <DescBox>
      <div>
        {children}
      </div>
    </DescBox>
  )
}
