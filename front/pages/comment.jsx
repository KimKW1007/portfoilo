import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FormBox from '../src/components/comment/FormBox';

import Container from '../src/components/common/Container';
import Contents from '../src/components/common/Contents';
import Main from '../src/components/common/Main';
import Title from '../src/components/common/Title';
import { DownArrow } from '@styled-icons/boxicons-solid';
import CommentList from '../src/components/comment/CommentList';
import { FormCloseBox, FormOutBox } from '../styles/pagesStyles/comment/commentStyle';

export default function Comment() {
  const [isOnForm, setIsOnForm] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  return (
    <Main>
      <Container>
        <Title>Comment</Title>
        <Contents>
          <FormCloseBox className={isOnForm ? 'onForm' : ''}>
            <button
              onClick={() => {
                setIsOnForm((prev) => !prev);
              }}>
              <DownArrow />
            </button>
          </FormCloseBox>
          <FormOutBox isOnForm={isOnForm} formHeight={formHeight}>
            <FormBox setFormHeight={setFormHeight} />
          </FormOutBox>
          <CommentList />
        </Contents>
      </Container>
    </Main>
  );
}
