import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loading from '../src/components/common/Loading';
import { Error } from '@styled-icons/boxicons-regular';
import { NotFoundRoot } from '../styles/pagesStyles/notFound/notFoundStyle';

export default function NotFound() {
  return (
    <NotFoundRoot className="NotFound">
      <h2>
        <Error />
      </h2>
      <h3>404 Not Found</h3>
    </NotFoundRoot>
  );
}
