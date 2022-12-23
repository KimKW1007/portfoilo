import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ItemBox = styled.li`
  text-align:center;
  padding:24px;
  > span{
    display:inline-block;
    padding-top:${({theme})=> theme.paddings.p24};
  }
  @media ${({theme})=>theme.device.d660}{
    padding:24px 0;
  }
`

const CircleWrap = styled.div`
  position:relative;
  width:110px;
  height:110px;
  margin:0 auto;
  svg{
    width:100%;
    height:100%;
    transform: rotate(-90deg);
    border-radius:50%;
    box-shadow: 3px -3px 7px #ffffff73,-3px 3px 7px rgba(94,104,121,.5);

  }
  svg:nth-child(1){
    position:relative;
    z-index: 2;

    circle{
      fill:#f5f5f5;
      stroke-width:8px;
      stroke-dasharray: var(--circleArray);
      stroke-dashoffset:0;
      stroke-linecap: round;
    }
  }
  svg:nth-child(2){
    position:absolute;
    left:50%;
    top:50%;
    z-index: 1;
    transform:translate(-50%,-50%) rotate(-90deg);
    circle{
      stroke:#dbdbdb;
      stroke-width:8px;
    }
  }
  .rateBox{
    position:absolute;
    left:50%;
    top:50%;
    z-index: 3;
    transform:translate(-50%,-50%);
  }
`


export default function SkillLevel({title, rate, color}) {

  return (
    <ItemBox>
      <CircleWrap className="circleWrap">
        <svg>
          <circle cx="50%" cy="50%" r="50px" style={{stroke:color}}/>
        </svg>
        <svg>
          <circle cx="50%" cy="50%" r="48px"/>
        </svg>
        <div className="rateBox">
          <span data-rate={rate} className="dataRate">0</span>
        </div>
      </CircleWrap>
      <span>
        {title}
      </span>
    </ItemBox>
  )
}
