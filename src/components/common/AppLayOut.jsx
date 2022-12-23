import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { counter } from '../../../state/atoms';
import Loading from './Loading';
import NotFound from '../../../pages/404';
import { getProjectList } from '../../api/clientApi';
import { LayoutBox, LayoutWrap } from './appLayOutStyle';
import { LoadingBox } from '../project/slideWrapStyle';

export default function AppLayOut({ children }) {
  const { pathname } = useRouter();
  const { isLoading, status, data, error } = useQuery(['getProjectKey'], getProjectList);
  const count = useRecoilValue(counter);
  const [currentColor, setCurrentColor] = useState('');
  const isLitho = data?.findIndex((x) => x.title === 'LITHO') === count;
  useEffect(() => {
    if (status === 'success') {
      if (count !== -1) {
        const bgColor = data[count].color;
        setCurrentColor(bgColor);
      }
    }
  }, [status, count, pathname]);
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries(['getCommentKey']);
  }, []);
  return (
    <LayoutWrap path={pathname} isLitho={isLitho}>
      <LayoutBox className="layout" path={pathname} isLoading={isLoading} bgColor={currentColor} notFound={count === -1}>
        {isLoading ? (
          <LoadingBox>
            <Loading />
          </LoadingBox>
        ) : count === -1 ? (
          <NotFound />
        ) : (
          children
        )}
      </LayoutBox>
    </LayoutWrap>
  );
}
