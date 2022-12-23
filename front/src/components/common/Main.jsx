import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { counter, projectData } from '../../../state/atoms';
import { LineI } from './AppRoot';

const MainBox = styled.main`
  width: 100%;
  ${({path}) => path === "/" && `height:100%;`}
  min-height:100%;
`;
export default function Main({ children }) {
  const {pathname} = useRouter();

  return (
    <MainBox path={pathname} >
      {children}
    </MainBox>
  );
}
