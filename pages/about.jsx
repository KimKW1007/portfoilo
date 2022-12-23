import Main from '../src/components/common/Main';
import Title from '../src/components/common/Title';
import Container from '../src/components/common/Container';
import Contents from '../src/components/common/Contents';
import Info from '../src/components/about/Info';
import InfoDesc from '../src/components/about/InfoDesc';
import Image from 'next/image';

export default function About() {
  return (
    <Main>
      <Container>
        <Title>ABOUT ME</Title>
        <Contents>
          <Info />
          <InfoDesc/>
        </Contents>
      </Container>
    </Main>
  );
}
