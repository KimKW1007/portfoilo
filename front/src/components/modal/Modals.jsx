import { useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { Error} from "@styled-icons/boxicons-regular"
import { ModalDesc, ModalInputBox, Dim, ModalBtnBox, ModalBox, ModalTitle } from './modalStyle';

export default function Modals({id, mode, comment, setIsModalOpen, setCheckPW, setModalSubject, handleDeleteFn, handleCreateCommentFn, onSubmitState}) {
  const queryClient = useQueryClient();
  const [deletePW, setDeletePW] = useState("");
  const handleIdentify = ()=>{
    if(deletePW){
      setCheckPW(deletePW);
      setModalSubject({
        mode :"remind",
        comment :"삭제하시겠습니까?",
      });
    }
    if(mode  === "remind"){
      handleDeleteFn(id);
    }
    if(mode === "notWriter" || mode === "success" || mode === "noPW"){
      queryClient.invalidateQueries(['getCommentKey']);
      setIsModalOpen(false);
      setModalSubject({
        mode :"",
        comment :"",
      });
      if(mode === "noPW"){
        handleCreateCommentFn(onSubmitState)
      }
    }
  }
  const handleCancle = ()=>{
    setIsModalOpen(false);
    if(mode !== "noPW"){
      setCheckPW("");
    }
    setModalSubject({
      mode :"",
      comment :"",
    });
  }
  return (
    <Dim>
      <ModalBox>
        <div className="innerBox">
          <ModalTitle><Error/></ModalTitle>
          <ModalDesc className={mode === "notWriter" ? 'notWriter' : ""}>
            {comment.includes("\n") ? comment.split("\n").map(ele=> <p key={ele}>{ele}</p>) : comment}
          </ModalDesc>
          <ModalInputBox>
            {mode === "delete" && <input type="password" value={deletePW} onChange={(e)=>{setDeletePW(e.target.value)}} />}
          </ModalInputBox>
          <ModalBtnBox>
            <button className='identify' disabled={mode === "delete" && !deletePW} onClick={handleIdentify}>확인</button>
            {(mode === "remind" || mode === "delete" || mode === "noPW") && <button className='cancle' onClick={handleCancle}>취소</button>}
          </ModalBtnBox>
        </div>
      </ModalBox>
    </Dim>
  )
}
