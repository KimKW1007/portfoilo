import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalAtom } from '../../../state/atoms';
import { deleteComment, getComment } from '../../api/clientApi';
import { fixDate } from '../../utils/fixDate';
import Loading from '../common/Loading';
import Modals from '../modal/Modals';
import { ListBox } from './commentListStyle';

const LoadingBox = styled.div`
  height: 100vh;
  max-height: 300px;
`;

export default function CommentList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkPW, setCheckPW] = useState('');
  const [currentId, setCurrentId] = useState('');
  const [{ mode, comment: modalComment }, setModalSubject] = useRecoilState(modalAtom);
  const deleteCommentMutate = useMutation(['deleteCommentKey'], deleteComment, {
    onError: (err) => {
      setModalSubject({
        mode: 'notWriter',
        comment: '비밀번호가 틀렸습니다.\n(혹시 작성자가 아니신가요..?)'
      });
    },
    onSuccess: () => {
      setModalSubject({
        mode: 'success',
        comment: '삭제되었어요!'
      });
    }
  });
  const { isLoading, status, data, error } = useQuery(['getCommentKey'], getComment);
  if (isLoading) {
    return (
      <LoadingBox>
        <Loading />
      </LoadingBox>
    );
  }
  const handleDeleteConfirm = (commentId) => () => {
    setCurrentId(commentId);
    setIsModalOpen(true);
    setModalSubject({
      mode: 'delete',
      comment: '비밀번호를 입력해주세요'
    });
  };
  const handleDeleteFn = (commentId) => () => {
    deleteCommentMutate.mutate({ commentId, password: checkPW });
  };
  return (
    <ListBox>
      <ul>
        {data?.map(({ commentId, name, comment, createdAt }) => (
          <li key={commentId}>
            <div className="author">
              <h3>{name}</h3>
              <button onClick={handleDeleteConfirm(commentId)}>삭제</button>
            </div>
            <div className="comment">{comment.includes('\n') ? comment.split('\n').map((ele) => <p key={ele + commentId}>{ele}</p>) : comment}</div>
            <div className="date">{fixDate(createdAt)}</div>
            {isModalOpen && currentId === commentId && <Modals commentId={commentId} name={name} mode={mode} comment={modalComment} handleDeleteFn={handleDeleteFn(commentId)} setModalSubject={setModalSubject} setIsModalOpen={setIsModalOpen} setCheckPW={setCheckPW} />}
          </li>
        ))}
      </ul>
    </ListBox>
  );
}
