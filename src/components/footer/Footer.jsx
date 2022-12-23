import styled from "styled-components";

const FooterBox = styled.div`
  position:relative;
  padding : 20px 0;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.gray};
  @media (max-width:560px){
    padding-bottom: 100px;
  }
`

export default function Footer() {
  return <FooterBox>Copyright 2022. KyeongWon All rights reserved.</FooterBox>;
}
