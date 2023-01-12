import styled, { css } from "styled-components";

export const Root = styled.div`
color: ${({ theme }) => theme.colors.white};
`;
export const RootContainer = styled.div`
margin: 0 10.4166vw;
padding: 50px 0 60px;
border-left: 3px solid #ffd79e;
border-right: 3px solid #ffd79e;
`;
export const PdContainer = styled.div`
padding: 200px 4.1666vw;
@media (min-width: 1921px) {
  padding: 200px 7.8647vw;
}
@media ${({ theme }) => theme.device.d722} {
  padding: 27.7008vw 4.1666vw;
}
`;

export const IndicatorBox = styled.div`
display: flex;
padding: 0 2.6041vw;
justify-content: space-between;
align-items: center;
.prevBtnBox,
.nextBtnBox {
  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 50px;
    height: 50px;
  }
}
.goListLink {
  a {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.white};
  }
}
@media ${({ theme }) => theme.device.d910} {
  .goListLink {
    a {
      font-size: 13px;
    }
  }
}
`;

export const ItemTitleBox = styled.div`
text-align: right;
margin-bottom: 200px;
h2 {
  font-size: 130px;
  font-weight: 400;
  letter-spacing: -8px;
  margin-bottom: 30px;
  span {
    font-size: 36px;
    letter-spacing: -3px;
    margin-right: 10px;
  }
}
p {
  font-size: 24px;
}
@media ${({ theme }) => theme.device.d1280} {
  h2 {
    font-size: 10.1562vw;
  }
}
@media ${({ theme }) => theme.device.d800} {
  h2 {
    letter-spacing: -0.625vw;
    span {
      font-size: 4.5vw;
      letter-spacing: -0.375vw;
    }
  }
}
@media ${({ theme }) => theme.device.d722} {
  margin-bottom: 27.7008vw;
}
@media ${({ theme }) => theme.device.d560} {
  p {
    font-size: 4.2857vw;
  }
}
`;

export const ItemDescBox = styled.div`
display: flex;
justify-content: end;
align-items: center;
padding: 0 2.6041vw;
word-break: keep-all;
i {
  width: 250px;
  height: 1px;
  background: ${({ theme }) => theme.colors.white};
}
.descInnerBox {
  margin-left: 100px;
  h3 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  p {
    line-height: 1.5;
  }
}
@media ${({ theme }) => theme.device.d860} {
  i {
    width: 29.0697vw;
  }
  .descInnerBox {
    margin-left: 11.6279vw;
    h3 {
      font-size: 2.3255vw;
      margin-bottom: 3.4883vw;
    }
    p {
      font-size: 1.6279vw;
    }
  }
}
@media ${({ theme }) => theme.device.d722} {
  text-align: center;
  justify-content: center;
  padding: 0;
  i {
    display: none;
  }
  .descInnerBox {
    margin-left: 0;
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 11px;
    }
  }
}
`;

export const ItemContentBox = styled.div`
display: flex;
align-items: center;
height: 600px;
margin-top: 200px;
@media ${({ theme }) => theme.device.d1300} {
  display: block;
  height: auto;
}
@media ${({ theme }) => theme.device.d768} {
  margin-top: 26.0416vw;
} ;
`;

export const ItemImgBox = styled.div`
flex: 1;
flex-shrink: 0;
height: 100%;
display: flex;
justify-content: center;
.imgBg {
  display: block;
  width: 480px;
  height: 600px;
  background: url(${({ image }) => image}) center center no-repeat;
  background-size: cover;
  box-shadow: 30px 30px 15px 5px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  ${({isDasida}) => isDasida && css`
    border : 1px solid #eeeeee20;
  `}
}
@media ${({ theme }) => theme.device.d768} {
  .imgBg {
    width: 62.5vw;
    height: 78.125vw;
    min-width: 200px;
    min-height: 300px;
  }
} ;
`;
export const ItemDetailTextBox = styled.div`
flex: 1;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 1650px) {
  padding-left: 2.7878vw;
}
@media ${({ theme }) => theme.device.d1300} {
  padding-top: 100px;
  text-align: center;
  padding-left: 0;
} ;
`;
export const ItemInfoBox = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
word-break: keep-all;
ul {
  li {
    padding-left: 16px;
    position: relative;
    line-height: 1.2;
    div {
      display:flex;
      padding: 6px 0 0 10px;
      span:nth-child(1){
        flex-shrink:0;
        margin-right:4px;
      }
    }
    & + li {
      margin-top: 10px;
    }
    &::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};
    }
    &.teamTolls {
      &::before {
        top: 8px;
      }
    }
    p {
    }
  }
}
@media ${({ theme }) => theme.device.d1300} {
  padding-top: 0;
  ul {
    li {
      padding-left: 0;
      &::before {
        display: none;
      }
      &.teamTolls {
        line-height: 1.5;
      }
    }
  }
}
@media ${({ theme }) => theme.device.d860} {
  font-size: 1.6279vw;
}
@media ${({ theme }) => theme.device.d722} {
  font-size: 11px;
} ;
`;
export const ItemPromotionBox = styled.div`
line-height: 1.3;
word-break: keep-all;
h3 {
  margin-bottom: 20px;
}
p {
  margin-bottom: 30px;
}
div{
  padding: 5px 0;
  a {
    color: ${({ theme }) => theme.colors.white};
    display: inline-flex;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      margin-top: 2px;
    }
  }
}
@media ${({ theme }) => theme.device.d1300} {
  padding-top: 50px;
  div{
      padding: 10px 0;
    a {
      justify-content: center;
      svg {
        display:none;
      }
    }
  }
}
@media ${({ theme }) => theme.device.d860} {
  h3 {
    font-size: 1.9046vw;
  }
  p {
    font-size: 1.6279vw;
  }
}
@media ${({ theme }) => theme.device.d722} {
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 11px;
  }
} ;
`;
