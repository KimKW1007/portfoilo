import styled, { keyframes } from "styled-components"
import { LocationIcon } from "./mobNavStyle";

const menuAni = keyframes`
  100%{
    transform:translateX(0);
    
  }
`

export const NavBox = styled.div`
  position:relative;
  z-index: 50;
  width: 80px;
  height: 90%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: ${({theme})=> theme.colors.gray};
  border-radius: 12px;
  transform:translateX(100%);
  animation: ${menuAni} 1.5s forwards;
  border: 1px solid #888;
  .menuBox {
    width: 80%;
    nav {
      display: block;
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      ul {
        position:relative;
        li {
          position:relative;
          margin: 10px 0;
          z-index:3;
          overflow:hidden;
          a{
            display:inline-block;
            width: 55px;
            height: 55px;
            padding: 12px;
            border-radius: 50%;
            svg {
              color:#fff;
            }
          }
          &.errorIconBox{
            margin: 10px auto;
            height:55px;
            border-radius: 50%;
            display:flex;
            align-items:center;
            justify-content:center;
            svg {
              margin-top: -4px;
              width:31px;
              color:#fff;
            }
          }
          
          > div{
            opacity:0;
            position:absolute;
            padding: 8px 10px;
            right: 115%;
            top: 50%;
            transform: translate(0,-50%);
            display:inline-flex;
            justify-content:center;
            align-items:center;
            border-radius: 5px;
            background: #FFDEB4;
            transition: opacity .3s;
            font-family: Kanit, sans-serif;
            &::after{
              content:"";
              position:absolute;
              right: -5%;
              top:50%;
              transform: translateY(-50%) rotate(-45deg);
              width:10px;
              height:10px;
              background:#FFDEB4;
            }
          }
          a:hover + div{
            opacity: 1;
          }
          &:hover{
            overflow: initial;
          }
          &.active{
            a svg {
              color:#000;
            }
          }
          &.active:active ~ .indicator{
            background:#C1EFFF;
          }
          &.errorIconBox.active ~ .indicator{
            background:#FF8787;
          }
        }
      }
    }
  }
`;

export const NavLocationIcon = styled(LocationIcon)`
  width: 55px;
  height: 55px;
  left: 50%;
  transform: translateX(-50%);
  z-index:2;
  top: var(--top);
  transition:top .3s, background .2s;
  &::before,&::after{
    display:none;
  }
`