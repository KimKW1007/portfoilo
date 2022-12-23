import styled, { keyframes } from "styled-components"

const linkAnimation = keyframes`
80%{
  transform:translateX(0);
}
100%{
  transform:translateX(0);
  opacity:1;
}
` 
export const LinkBox = styled.div`
  display:flex;
  justify-content:center;
  margin-top: 50px;
  a{
    display:flex;
    align-items:center;
    width:230px;
    height:46px;
    border-radius:7px; 
    overflow:hidden;
    margin:0 24px;
    user-select:none;
    opacity:0;
    transform:translateY(150px);
    box-shadow: 15px 15px 10px rgba(0,0,0,.3);
    animation: ${linkAnimation} 1s forwards;
    transition: transform .6s, color .6s, background .3s;
    font-weight:800;
    span{
      position:relative;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:calc(100% - 60px);
      height:100%;
      text-align:center;
      &::before,&::after{
        content:"";
        position:absolute;
        right: -14px;
        width:20px;
        height:23px;
        transition: color .6s, background .3s;
      }
      &::before{
        top:0;
        border-radius: 0 0 20px 0;
      }
      &::after{
        bottom:0;
        border-radius: 0 20px 0  0;
      }
    }
    .iconBox{
      display:flex;
      width: 60px;
      height:100%;
      transition: color .6s, background .3s;
      svg{
        margin:auto 10px auto auto;
        width:30px;
        height:30px;
        transition: color .6s, background .3s;
      }
    }
    &:nth-child(1){
      background: ${({theme})=> theme.colors.white};
      color:${({theme})=> theme.colors.linkBtnColor1};
      span{
        &::before,&::after{
          background:${({theme})=> theme.colors.white};
        }
      }
      .iconBox{
        background:${({theme})=> theme.colors.linkBtnColor1};
        svg{
          color:${({theme})=> theme.colors.white};
        }
      }
    }
    &:nth-child(2){
      animation-delay: .3s;
      background: ${({theme})=> theme.colors.linkBtnColor2};
      color:${({theme})=> theme.colors.white};
      span{
        &::before,&::after{
          background: ${({theme})=> theme.colors.linkBtnColor2};
        }
      }
      .iconBox{
        background:${({theme})=> theme.colors.white};
        svg{
          color: ${({theme})=> theme.colors.linkBtnColor2};
        }
      }
    }
    &:hover{
      color: ${({theme})=> theme.colors.white};
      &:nth-child(1){
        background: ${({theme})=> theme.colors.linkBtnColor1};
        color:${({theme})=> theme.colors.white};
        span{
          &::before,&::after{
            background:${({theme})=> theme.colors.linkBtnColor1};
          }
        }
        .iconBox{
          background:${({theme})=> theme.colors.white};
          svg{
            color:${({theme})=> theme.colors.linkBtnColor1};
          }
        }
      }
      &:nth-child(2){
        animation-delay: .3s;
        background: ${({theme})=> theme.colors.white};
        color: ${({theme})=> theme.colors.linkBtnColor2};
        span{
          &::before,&::after{
            background:${({theme})=> theme.colors.white};
          }
        }
        .iconBox{
          background: ${({theme})=> theme.colors.linkBtnColor2};
          svg{
            color:${({theme})=> theme.colors.white};
          }
        }
      }
    }
  }
  @media ${({theme}) => theme.device.d560}{
    display:block;
    a{
      width: 100%;
      height: 50px;
      margin : 0;
      span{
        &::before,&::after{
          width: 25px;
          height: 25px;
        }
      }
      + a{
        margin : 30px 0 0;
      }
    }
  }
`