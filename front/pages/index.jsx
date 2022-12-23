import Main from '../src/components/common/Main';
import Container from '../src/components/common/Container';
import Greeting from '../src/components/index/Greeting';
import CenterTextBox from '../src/components/index/CenterTextBox';
import Title from '../src/components/common/Title';
import MainDesc from '../src/components/index/MainDesc';
import PortfolioSVG from '../src/components/index/PortfolioSVG';


export default function Home() {
  return (
      <Main>
        <Container>
          <Greeting/>
          <CenterTextBox>
            <Title><PortfolioSVG/></Title>
            <MainDesc>
              <h3>꿈을 이루는 개발자</h3>
              <p>
                항상 공부하며<br />
                무엇이든 이루어 내는<br />
                웹 개발자 입니다.<br />
                저에 대해 자세히 만나보세요<br />
              </p>
            </MainDesc>
          </CenterTextBox>
        </Container>
      </Main>
  );
}
