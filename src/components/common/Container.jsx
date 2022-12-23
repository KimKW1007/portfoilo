import { useRouter } from "next/router"
import styled from "styled-components"

const ContainerBox = styled.div`
  position:relative;
  max-width:1400px;
  width:100%;
  margin: 0 auto;
  overflow:hidden;
  ${({path}) => path === "/" && `height:100%;`}
  padding:  ${({theme}) => theme.paddings.p90};
  transition: padding .3s; 
  &.notHome{
    padding:  ${({theme}) => theme.paddings.p50} ${props => props.theme.paddings.p24};
  }
  @media ${({theme})=> theme.device.d768}{
    padding: ${({theme})=> theme.paddings.p90} ${props => props.theme.paddings.p24};
  }
  @media ${({theme})=> theme.device.d560}{
    &.notHome{
      padding:  ${({theme}) => theme.paddings.p50} 4.2857vw;
    }
  }
`

export default function Container({children}) {
  const {pathname} = useRouter();
  return (
    <ContainerBox path={pathname} className={pathname !== '/' ? "notHome" : ""}>{children}</ContainerBox>
  )
}
