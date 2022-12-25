import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();



const baseApi =  axios.create({
  headers: {
    "Content-Type": "application/json",
  },
})

baseApi.defaults.baseURL = 'https://port-0-portfoilo-back-ll32glc0g30q9.gksl2.cloudtype.app';
export const createComment = async(data) =>{
  try{
    const res = await baseApi.post(`/comments`, data)
  }catch(err){
    console.log(err);
  }
}
export const getComment = async() =>{
  try{
    const res = await baseApi.get(`/comments`)
    return res.data;
  }catch(err){
    console.log(err);
  }
}
export const deleteComment = async({commentId, password}) =>{
  try{
    console.log({commentId})
    const res = await baseApi.delete(`/comments`, {
      data : {commentId, password}
    })
  }catch(err){
    throw err.response;
  }
}
export const getProjectList = async() =>{
  try{
    const res = await baseApi.get(`/projects`)
    return res.data;
  }catch(err){
    console.log(err);
  }
}