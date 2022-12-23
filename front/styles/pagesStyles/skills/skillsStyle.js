import styled, { keyframes } from "styled-components";


export const moveArrow = keyframes`
  50%{transform: translate(-2px,-2px);}
`


export const InnerBox = styled.div`
  display:flex;
  @media (max-width: 1250px){
    display:block;
  }
`

export const SkillDetailBox = styled.div`
  margin: 0 0 0 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 1250px){
    margin: 50px 0 0 ;
  }
`

export const DetailInnerBox =styled.div`
  color:#fff;
  width: 70%;
  height:80%;
  .skillTitle{
    position:relative;
    width:280px;
    height: 70px;
    line-height:60px;
    border: 1px solid #fff;
    font-size: 36px;
    text-align: center;
    text-transform:capitalize;
    background : #393E46;
    transform: rotate(-35deg);
    transform-origin: 40% 180%;
    h3{
      i{
        display:inline-block;
        width:50px;
        height:50px;
        margin-right:20px;
        svg{
          animation: ${moveArrow} 1s infinite;
        }
      }
    }
    
  }
  .skillDesc{
    display: flex;
    align-items: center;
    justify-content: center;
    height:calc(100% - 70px);
    font-size: 16px;
    border: 1px solid #fff;
    padding: 30px 0;
    line-height: 1.3;
    border-radius: 10px;
    ul{
      padding: 0 30px 0 80px;
      li{
        padding: 10px 0;
        list-style: circle;
        word-break: keep-all;
      }
    }
  }
  @media (max-width: 1250px){
    width: 100%;
    height: 500px;
    .skillTitle{
      margin: 0 auto;
      transform: rotate(0);
      transform-origin: 0 0;
      font-size: 28px;
      h3{
        i{
          width:40px;
          height:40px;
          margin-top:2px;
          margin-right:6px;
          transform: rotate(45deg);
        }
      }
    }
  }
`