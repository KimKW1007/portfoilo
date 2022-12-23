import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { useRouter } from "next/router"
import styled from "styled-components"

const ContentsBox = styled.div`
  position:relative;
  height:100%;
  margin: 5.468vw auto 0;
  width: 80%; 
  transition: width .3s;
  @media ${({theme}) => theme.device.d1300}{
    width: 100%; 
  }
  @media ${({theme}) => theme.device.d1064}{
    margin: 60px auto 0;
  }
  @media (min-width: 1921px){
    margin:8.5937vw auto 0;
  }
`

export default function Contents({children}) {
  const {pathname} = useRouter();

  return <ContentsBox path={pathname}>{children}</ContentsBox>
}
