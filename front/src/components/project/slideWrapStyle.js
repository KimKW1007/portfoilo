import styled, { keyframes } from "styled-components"

const fadeInScaleUpAnimation = keyframes`
80%{
  transform:scale(1);
}
100%{
  transform:scale(1);
  opacity:1;
}
`;
const iFadeInAnimation = keyframes`
100%{
  opacity:1;
}
`;

export const SwiperContainer = styled.div`
position: relative;
width: 100%;
margin: auto 0;
i {
  display: block;
  width: 80%;
  height: 1px;
  background: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: width 1s, left 1s;
  opacity: 0;
  animation: ${iFadeInAnimation} 1s forwards 0.5s;
  &.first {
    width: 50%;
    left: 65%;
  }
  &.last {
    width: 50%;
    left: 35%;
  }
}
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
.swiper-button-prev,
.swiper-button-next {
}
.swiper {
  width: 380px;
  transform: scale(0.8);
  opacity: 0;
  animation: ${fadeInScaleUpAnimation} 1s forwards;
  background: no-repeat center center;
  box-shadow: 30px 30px 15px 5px rgba(0, 0, 0, 0.3);
  &-wrapper {
    width: 100%;
    .swiper-slide {
      width: 100%;
      height: 500px;
      overflow: hidden;
      user-select: none;
      &-active {
        .textBox {
          .title,
          .desc {
            transform: translateY(0);
          }
        }
      }
    }
  }
}
@media ${({ theme }) => theme.device.d1064} {
  i {
    display: none;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
@media ${({ theme }) => theme.device.d650} {
  .swiper {
    box-shadow: 2.3076vw 2.3076vw 2.3076vw 3px rgba(0, 0, 0, 0.3);
  }
}
@media (max-width: 490px) {
  .swiper {
    width: 77.551vw;
    min-width: 280px;
    &-wrapper {
      .swiper-slide {
        height: 102.0408vw;
        min-height: 375px;
      }
    }
  }
}
`;

export const ImgBox = styled.div`
position: relative;
z-index: 1;
width: 100%;
height: 100%;
img {
  height: 100%;
  object-fit: cover;
}
`;

export const TextBox = styled.div`
position: absolute;
z-index: 2;
left: 0;
top: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
color: ${({ theme }) => theme.colors.white};
.title {
  font-size: ${({ theme }) => theme.fontSizes.fz34};
  padding: ${({ theme }) => theme.paddings.p30} ${({ theme }) => theme.paddings.p30} ${({ theme }) => theme.paddings.p50};
  font-weight: 600;
  letter-spacing: -1px;
  background: linear-gradient(to bottom, #00000084 10%, transparent);
  transform: translateY(-100%);
  transition: transform 0.6s;
  span {
    display: inline-block;
    margin-right: ${({ theme }) => theme.margins.m5};
    font-size: ${({ theme }) => theme.fontSizes.fz20};
  }
}
.desc {
  padding: ${({ theme }) => theme.paddings.p50} ${({ theme }) => theme.paddings.p36} ${({ theme }) => theme.paddings.p30};
  line-height: 1.5;
  letter-spacing: 1px;
  background: linear-gradient(to top, #00000094 50%, transparent);
  transform: translateY(100%);
  transition: transform 0.6s;
}
@media ${({ theme }) => theme.device.d480} {
  .title{
    font-size: 7.0833vw;
  }
  .desc {
    font-size: 2.9166vw;
  }
}
`;

export const PrevBtn = styled.button`
width: 50px;
height: 50px;
transform: scale(0.5);
opacity: 0;
animation: ${fadeInScaleUpAnimation} 1s forwards 0.5s;
background: inherit;
svg {
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.colors.white};
}
&:disabled {
  svg {
    color: ${({ theme }) => theme.colors.white}75;
  }
}
`;
export const NextBtn = styled(PrevBtn)``;

export const LoadingBox = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;