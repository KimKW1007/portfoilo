import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const baseApi =  axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
})
export const createComment = async(data) =>{
  try{
    const res = await baseApi.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comments`, data)
  }catch(err){
    console.log(err);
  }
}
export const getComment = async() =>{
  try{
    const res = await baseApi.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comments`)
    return res.data;
  }catch(err){
    console.log(err);
  }
}
export const deleteComment = async({commentId, password}) =>{
  try{
    console.log({commentId})
    const res = await baseApi.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/comments`, {
      data : {commentId, password}
    })
  }catch(err){
    throw err.response;
  }
}
export const getProjectList = async() =>{
  try{
    const res = await baseApi.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`)
    return res.data;
  }catch(err){
    console.log(err);
  }
}