import styled from "styled-components"

const SkillBox = styled.div`
  width: 320px;
  flex-shrink:0;
  
  div{
    position:relative;
    border : 1px solid #fff;
    border-radius: 5px;
    padding :20px;
    cursor:pointer;
    color:#fff;
    &+ div{
      margin-top:50px;
    }
    &.active{
      filter:blur(1px);
    }
    &:hover{
      filter:blur(1px);
    }
    h3{
      position:absolute;
      left: 50%;
      top : -25px;
      transform:translateX(-50%);
      display:inline-block;
      font-family: Kanit, sans-serif;
      font-weight:600;
      font-size: 20px;
      background: #393E46;
      padding: 6px 12px;
      border : 2px solid #efefef;
      border-radius: 8px;
      
    }
    ul{
      display:flex;
      flex-wrap: wrap;
      justify-content:center;
      li{
        padding : 6px 12px;
        border : 2px solid #fff;
        margin: 5px;
        border-radius: 15px;
        font-size: 13px;
        transition: color .3s , background .3s;
        
        
      }
    }
  }
  @media (max-width: 1250px){
    display:grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 50px 80px;
    div + div{
      margin-top: 0;
    }
  }
  @media (max-width: 1091px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

export default function SkillsBox({children}) {
  return (
    <SkillBox className="active">
      {children}
    </SkillBox>
  )
}
