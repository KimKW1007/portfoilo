import styled, { keyframes } from "styled-components"

export const InfoBox = styled.div`
width: 100%;
margin: 0 auto;
display: flex;
justify-content: space-around;
align-items:center;
@media ${({theme})=> theme.device.d1300}{
  flex-direction:column;
}
`;

export const ImgBox = styled.div`
flex-shrink: 0;
width: 14.5833vw;
height: 14.5833vw;
min-width: 200px;
min-height: 200px;
max-width: 280px;
max-height: 280px;
border-radius: 50%;
overflow: hidden;
box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.2);
.imgBg {
  width: 100%;
  height: 100%;
  background:  url(${({ image }) => image}) center center no-repeat;
  background-size: cover;
}
`;
export const InfoContent = styled.div`
ul {
  li {
    display: flex;
    align-items: center;
    width: 80%;
    min-width:270px;
    margin: 0 auto;
    text-align: center;
    padding: 15px 30px;
    border-radius: 20px;
    background: #232830;
    color: #fff;
    a{
      color: #fff;
      margin-left:5px;
      &:hover{
        background: linear-gradient(to right, #a8ff78 , #78ffd6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    & + li{
      margin-top: 10px;
    }
  }
}
@media ${({theme})=> theme.device.d1300}{
  margin-top: 50px;
  ul{
    li{
      max-width: 310px;
    }
  }
}
`;