import styled, { keyframes } from "styled-components"


export const Nav = styled.nav`
  display: block;
  position: fixed;
  z-index: 100;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 350px;
  ul {
    display: flex;
    background: ${({theme})=> theme.colors.gray};
    width: 100%;
    height: 60px;
    justify-content: space-evenly;
    border-top: 6px solid  #4B79A1;
    
    li {
      position:relative;
      z-index:3;
      flex-shirink: 0;
      width: 50px;
      text-align: center;
      a {
        display: flex;
        height: 100%;
        position: relative;
        align-items: center;
        justify-content: center;
        svg {
          transition: transform 0.3s, color .3s;
          width: 25px;
          height: 25px;
          color:${({theme})=> theme.colors.white};
        }
        p {
          position: absolute;
          opacity:0;
          transition: opacity 0.3s, transform .3s;
          transform: translateY(20px);
          color:${({theme})=> theme.colors.white};
        }
      }
      
      &.active a svg {
        transform: translateY(-28px);
        color:#000;
      }
      &.active a p {
        opacity:1;
        transform: translateY(10px);
      }
      &.active:active ~ .indicator{
        background:#C1EFFF;
      }
    }
  }
`;
export const LocationIcon = styled.div`
  position: absolute;
  z-index:1;
  left: var(--left);
  top: -19px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #FFDEB4;
  transition:left .3s, background .2s;
  border : 4px solid #4B79A1;
  &:before{
    content:"";
    position:absolute;
    top:50%;
    left: -19px;
    width:18px;
    height:18px;
    background:${({theme})=> theme.colors.gray};
    border-radius:  0 20px 0 0;
    box-shadow: 2px -6px 0 0 #4B79A1;
  }
  &:after{
    content:"";
    position:absolute;
    top:50%;
    right: -19px;
    width:18px;
    height:18px;
    background:${({theme})=> theme.colors.gray};
    border-radius:  20px 0 0 0 ;
    box-shadow: -2px -6px 0 0 #4B79A1;
  }

`;