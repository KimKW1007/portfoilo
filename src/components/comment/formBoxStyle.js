import styled, { keyframes } from "styled-components"

export const Form = styled.form`
  position: relative;
  z-index: 2;
  background: #393e4693;
  padding: 50px 3.6458vw 30px;
  font-family: 'Gamja Flower', cursive;
  @media ${({ theme }) => theme.device.d660} {
    padding: 50px 24px 30px;
  }
`;
export const AuthorBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  .authorInfoBox {
    display: flex;
    align-items: center;
    & + .authorInfoBox {
      margin-left: 30px;
    }
    span {
      margin-right: 10px;
    }
  }
  @media ${({ theme }) => theme.device.d615} {
    flex-direction: column;
    .authorInfoBox + .authorInfoBox {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

export const InputBox = styled.div`
  border-bottom: 2px solid #999;
  transition: border 0.3s;
  &:focus-within {
    border-bottom: 2px solid #fff;
  }

  input {
    outline: 0;
    width: 150px;
    background: inherit;
    height: 30px;
    padding: 0 10px;
    color: #fff;
    font-size: 15px;
    font-family: 'Gamja Flower', cursive;
  }
`;

export const CommentBox = styled.div`
  margin-bottom: 20px;
  span {
    display: block;
    margin: 0 0 10px;
  }
  .textareaBox{
    border-radius: 12px;
    overflow:hidden;
    textarea {
      display: block;
      width: 100%;
      height: 100px;
      resize: none;
      padding: 10px;
      outline: 2px solid #bbb;
      background: #999;
      transition: outline 0.3s, background 0.3s;
      color: #fff;
      font-size: 18px;
      font-family: 'Gamja Flower', cursive;
      &::-webkit-scrollbar {
        width: 7px;
        @media ${({theme})=> theme.device.d560}{
          width:0px;
        }
      }
      &::-webkit-scrollbar-thumb {
        background: #2f3542;
        border-radius:7px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
        margin: 7px 0 ;
      }
      &:focus {
        outline: 2px solid #999;
        background: #fff;
        color: #000;
      }
    }
  }
  .errAndCurrentLength {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .currentCmLength {
      color: #fff;
    }
  }
`;
export const SubmitBox = styled.div`
  position: relative;
  text-align: right;
  button {
    padding: 7px 15px;
    border-radius: 6px;
    color: #fff;
    background: linear-gradient(125deg, #143f6b, #143f6b 47%, #00ffab 52%, #00ffab);
    background-size: 230%;
    background-repeat: no-repeat;
    transition: background-position 1s, color 1s;
    font-family: 'Kanit', cursive;
    &:hover {
      color: #232323;
      background-position: 100%;
    }
  }
  button:hover + .starBox {
    svg {
      opacity: 1;
    }
  }
  .starBox {
    position: absolute;
    right: 110px;
    top: -10px;
    width: 20px;
    height: 20px;
    svg {
      position: absolute;
      opacity: 0;
      transition: opacity 0.3s;
      &:nth-child(1) {
        width: 8px;
        left: 0;
        transform: rotate(90deg);
        transition-delay: 0.4s;
      }
      &:nth-child(2) {
        width: 10px;
        left: 50%;
        transform: rotate(70deg);
        transition-delay: 0.3s;
      }
      &:nth-child(3) {
        width: 14px;
        left: 100%;
        transform: rotate(45deg);
        transition-delay: 0.2s;
      }
      color: #fff;
    }
  }
`;

export const InputErrorMsg = styled.div`
  color: #bcead5;
`;
