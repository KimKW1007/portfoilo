import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const baseApi =  axios.create({
  headers: {
    "Content-Type": "application/json",
  },
})
export const createComment = async(data) =>{
  try{
    const res = await baseApi.post(`https://port-0-portfoilo-back-ll32glc0g30q9.gksl2.cloudtype.app/comments`, data)
  }catch(err){
    console.log(err);
  }
}
export const getComment = async() =>{
  try{
    const res = await baseApi.get(`https://port-0-portfoilo-back-ll32glc0g30q9.gksl2.cloudtype.app/comments`)
    return res.data;
  }catch(err){
    console.log(err);
  }
}
export const deleteComment = async({commentId, password}) =>{
  try{
    console.log({commentId})
    const res = await baseApi.delete(`https://port-0-portfoilo-back-ll32glc0g30q9.gksl2.cloudtype.app/comments`, {
      data : {commentId, password}
    })
  }catch(err){
    throw err.response;
  }
}
export const getProjectList = async() =>{
  try{
    const res = await baseApi.get(`https://port-0-portfoilo-back-ll32glc0g30q9.gksl2.cloudtype.app/projects`)
    return res.data;
  }catch(err){
    console.log(err);
  }
}