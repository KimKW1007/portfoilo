import styled, { keyframes } from "styled-components"


export const LayoutWrap = styled.div`
  position:relative;
  z-index:2;
  width: 90%;
  height: 90%;
  overflow:hidden;
  border-radius: 12px;
  border: 1px solid transparent;
  ${({path, isLitho}) => (path === '/skills'  || isLitho)  && `border: 1px solid #555;`};
`
export const LayoutBox = styled.div`
  width:100%;
  height:100%;
  overflow-y:scroll;
  background: #efefef;
  ${({path, bgColor}) => path.includes('/project') && `background : ${bgColor}`};
  ${({path, notFound, isLoading}) => (path === '/skills' || notFound || isLoading || path === "/404") && `background : #393E4693`};
  ${({path}) => (path === '/comment') && `background : #B1B2FF93`};
  &::-webkit-scrollbar {
    width: 7px;
    @media ${({theme})=> theme.device.d560}{
      width:0px;
    }
  }
  &::-webkit-scrollbar-thumb {
    ${({path}) =>( path === "/skills" || path.includes('/project') || path === '/comment') ? `background-color: #fff;` : `background-color: #2f3542;`}
    border-radius:7px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 7px 0 ;
  }
  transition : background .3s;

`
