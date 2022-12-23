import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { EyeFill, EyeSlashFill } from '@styled-icons/bootstrap';
import { Star } from '@styled-icons/boxicons-solid';
import { useForm } from 'react-hook-form';
import { NextFetchEvent } from 'next/server';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '../../api/clientApi';
import { useRecoilState } from 'recoil';
import { modalAtom } from '../../../state/atoms';
import Modals from '../modal/Modals';
import { AuthorBox, CommentBox, Form, InputBox, InputErrorMsg, SubmitBox } from './formBoxStyle';

export default function FormBox({ setFormHeight }) {
  const queryClient = useQueryClient();
  const formRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [{ mode, comment: modalComment }, setModalSubject] = useRecoilState(modalAtom);
  const [onSubmitState, setOnSubmitState] = useState({ name: '', password: '', comment: '' });

  const createCommentMutate = useMutation(['createCommentKey'], createComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getCommentKey']);
    }
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors }
  } = useForm();
  const handleCreateCommentFn =
    ({ name, password, comment }) =>
    () => {
      createCommentMutate.mutate({ name, password, comment });
      setValue('name', '');
      setValue('password', '');
      setValue('comment', '');
    };
  const onSubmit = async ({ name, password, comment }) => {
    if (password === '') {
      setIsModalOpen(true);
      setModalSubject({ mode: 'noPW', comment: '비밀번호가 없어도 상관없지만...\n나중에 삭제할 수 없습니다.\n작성하시겠습니까?' });
      setOnSubmitState({ name, password, comment });
    } else {
      handleCreateCommentFn({ name, password, comment })();
    }
  };
  const [currentCommentLength, setCurrentCommentLength] = useState(0);
  useEffect(() => {
    const leng = watch('comment').length;
    setCurrentCommentLength(leng);
    if (leng > 200) {
      setError('comment', { message: '너무 길어요,,ㅎ..ㅎ,,' });
    }
  }, [watch('comment')]);

  const isFirstEnter = (e) => {
    if (currentCommentLength === 0 && e.keyCode === 13) {
      e.preventDefault();
      setError('comment', { message: '처음부터..엔터라니요..ㅜㅜ' });
    } else {
      setError('comment', { message: '' });
    }
  };

  const currentFormHeightFn = () => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  };
  useEffect(() => {
    currentFormHeightFn();
  }, []);
  useEffect(() => {
    window.addEventListener('resize', currentFormHeightFn);
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <AuthorBox>
        <div className="authorInfoBox">
          <span>이름</span>
          <InputBox>
            <input type="text" {...register('name', { required: true })} />
          </InputBox>
        </div>
        <div className="authorInfoBox">
          <span>비밀번호</span>
          <InputBox>
            <input type="password" {...register('password')} />
          </InputBox>
        </div>
      </AuthorBox>
      <CommentBox>
        <span>댓글 내용</span>
        <div className="textareaBox">
          <textarea {...register('comment', { required: '한글자라도..적어주세요..ㅜ', minLength: 1, maxLength: 200 })} onKeyDown={isFirstEnter}></textarea>
        </div>
        <div className="errAndCurrentLength">
          <InputErrorMsg>{errors.comment && errors.comment.message}</InputErrorMsg>
          <div className="currentCmLength">{currentCommentLength} / 200</div>
        </div>
      </CommentBox>
      <SubmitBox>
        <button type="submit">Comment</button>
        <div className="starBox">
          <Star />
          <Star />
          <Star />
        </div>
      </SubmitBox>
      {isModalOpen && <Modals mode={mode} comment={modalComment} setModalSubject={setModalSubject} setIsModalOpen={setIsModalOpen} handleCreateCommentFn={handleCreateCommentFn(onSubmitState)} onSubmitState={onSubmitState} />}
    </Form>
  );
}
