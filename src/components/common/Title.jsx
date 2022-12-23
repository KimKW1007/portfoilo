import { useRouter } from 'next/router';
import React from 'react';
import { TitleBox } from './titleStyle';
export default function Title({ children }) {
  const { pathname } = useRouter();
  const pathSplit = pathname.split('/');
  const isVertical = pathSplit.length === 2 && pathSplit[1] !== '';
  const isProjectDetail = pathSplit.length > 2;
  return (
    <TitleBox isVertical={isVertical} path={pathname} className={`${pathname === '/' ? 'isHome' : ''} ${isProjectDetail ? 'projectDetail' : ''}`}>
      <div>
        <div className={isVertical ? `locationTitle` : ''}>{children}</div>
        <i></i>
      </div>
    </TitleBox>
  );
}
