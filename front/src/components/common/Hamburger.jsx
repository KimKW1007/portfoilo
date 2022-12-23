import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { isMenuOpen } from '../../../state/atoms';

const HamburgerBox = styled.button`
  position: relative;
  z-index:51;
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin:0 auto;
  transition: width 1s, height 1s, transform .5s;

`;
export default function Hamburger() {
  const [isMenu, setIsMenu] = useRecoilState(isMenuOpen);
  const {pathname} = useRouter();
  return (
    <HamburgerBox
      onClick={(e) => {
        setIsMenu(!isMenu);
      }}
      className={`${isMenu && 'active'} hbgMenu`}
      path ={pathname}
    >
    </HamburgerBox>
  );
}
