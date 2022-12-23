
import styled, { keyframes } from 'styled-components'


const openAni = keyframes`
  0%{transform: translateY(30px); opacity:0;}
  100%{transform: translateY(0); opacity:1;}
`

export const Dim = styled.div`
  position:fixed;
  left:0;
  top:0;
  min-width: 350px;
  width:100%;
  height:100%;
  z-index: 100;
  display:flex;
  align-items:center;
  justify-content:center;
`
export const ModalBox = styled.div`
  max-width:400px;
  width: 80%;
  padding: 50px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: #CEE5D0;
  border-radius: 10px;
  opacity:0;
  transform: translateY(30px);
  animation: ${openAni} .6s forwards .1s;
  .innerBox{
    width:70%;
  }
  @media ${({theme}) => theme.device.d660}{
    padding: 50px 7.5757vw;
    
  }
  @media ${({theme}) => theme.device.d480}{
    padding: 50px 20px;
    .innerBox{
      width:80%;
    }
  }
`

export const ModalTitle = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom: 20px;
  color:#FF8787;
  svg{
    width:40px;
  }
  
`

export const ModalDesc = styled.div`
  text-align:center;
  font-size:18px;
  margin-bottom: 20px;
  color:#3F0071;
  font-weight:600;
  line-height:1.4;
  word-break:keep-all;
  &.notWriter{
    p:last-child{
      font-size:14px;
    }
  }
`

export const ModalInputBox = styled.div`
  width:100%;
  margin-bottom: 20px;
  input{
    width:100%;
    height: 30px;
    text-align:center;
    font-size:18px;
    outline: 2px solid #bbb;
    background: #999;
    transition: outline 0.3s, background 0.3s;
    color:#fff;
    font-size:18px;
    font-family: 'Gamja Flower', cursive;
    &:focus {
      outline: 2px solid #999;
      background: #fff;
      color:#000;
    }
  }
`

export const ModalBtnBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  button{
    width: 75px;
    height: 30px;
    border-radius: 5px;
    transition: background 0.3s;
    color:#fff;
    &.identify{
      background:#646FD4;
      &:not(:disabled):hover{
        background:#242F9B;
      }
    }
    &.cancle{
      background:#FF8787;
      &:hover{
        background:#EC7272;
      }
    }
    &:disabled{
      background:#A2B5BB;
      cursor:not-allowed;
    }
  }
`