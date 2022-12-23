
import styled, { keyframes } from 'styled-components';

const path = keyframes`
  100%{
    stroke-dashoffset:0;
  }
`;
const svg = keyframes`
  100%{
    fill: #000;
  }
`;
const line = keyframes`
  100%{
    transform:scaleX(1);
  }
`;
const downMotionLine = keyframes`
  0%{
    height: 55px;
  }
  100%{
    height: 80px;
  }
`;
const downMotion = keyframes`
  0%{
    transform:translateY(-100%);
  }
  50%{
    transform:translateY(0);
  }
  65%{
    transform:translateY(-30%);
  }
  80%{
    transform:translateY(0px);
  }
  90%{
    transform:translateY(-10%);
  }
  100%{
    transform:translateY(0px);
  }
`;

export const TitleBox = styled.div`
  position: relative;
  display: inline-block;
  font-size: 50px;
  letter-spacing: -2px;
  transition: margin 0.3s;
  > div {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 2;
    font-size: 40px;
    text-transform: uppercase;
    @media ${({ theme }) => theme.device.d1280} {
      font-size: 3.125vw;
    }
    @media ${({ theme }) => theme.device.d768} {
      font-size: 24px;
    }
  }
  .locationTitle {
    position: relative;
    z-index: 2;
    transform: translateY(-100%);
    background: inherit;
    animation: ${downMotion} 1s forwards;
    ${({ path, theme }) =>
      path === '/comment' &&
      `
        color:${theme.colors.white};
      `}
    ${({ path, theme }) =>
      path === '/skills' &&
      `
        color:${theme.colors.white};
        text-shadow: 3px 3px 2px #ACC7F5;
      `}
    ${({ path, theme }) =>
      path === '/project' &&
      `
        color:${theme.colors.white};
        text-shadow: 0 0 15px ${theme.colors.black},  0 0 18px ${theme.colors.black} ,  0 0 25px ${theme.colors.black};
      `}
  }
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    filter: blur(10px);
  }
  @media ${({ theme }) => theme.device.d603} {
    margin-bottom: ${({ theme }) => theme.margins.m12};
  }

  i {
    display: inline-block;
    background: ${({ theme }) => theme.colors.textColor};
    ${({ isVertical, path, theme }) =>
      !isVertical
        ? `
      width: 135px;
      height: 1px;
      transform:scaleX(0);
      transform-origin:0 0;
      margin-left: ${theme.margins.m50};
      @media ${theme.device.d1280}{
        width:10.5468vw;
        margin-left: 3.9062vw;
      }
      `
        : `
      width: 2px;
      height: 55px;
      position:absolute;
      left:50%;
      top:-90px;
      z-index:1;
      transform:translateX(-50%);
      `}
    ${({ path, theme }) =>
      (path.includes('project') || path.includes('skills') || path.includes('comment')) &&
      `
      background: ${theme.colors.white};
      `}
    
    animation: ${downMotionLine} .5s forwards;
  }
  &.isHome,
  &.projectDetail {
    i {
      animation: ${line} 4s forwards;
    }
  }
  &.projectDetail {
    padding-left: 1.5625vw;
    i {
      width: 4.1666vw;
      min-width: 40px;
      margin-left: 1.5625vw;
    }
  }
  svg {
    width: 345px;
    height: 55px;
    flex-shrink: 0;
    fill: transparent;
    animation: ${svg} 6s forwards;
    @media ${({ theme }) => theme.device.d1280} {
      width: 26.9531vw;
      height: 4.2968vw;
      flex-shrink: 1;
    }
    @media ${({ theme }) => theme.device.d768} {
      width: 210px;
      height: 33px;
    }
  }
  path {
    stroke-width: 1px;
    stroke: #000;
    stroke-dasharray: var(--length);
    stroke-dashoffset: var(--length);
    animation: ${path} 3s forwards;
  }
`;