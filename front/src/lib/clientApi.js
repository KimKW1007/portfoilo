import axios from 'axios';


const baseApi =  axios.create({
  headers: {
    "Content-Type": "application/json",
  },
})

export const createComment = async(data) =>{
  try{
    const res = await baseApi.post("http://localhost:5001/comments", data)
  }catch(err){
    console.log(err);
  }
}
export const getComment = async() =>{
  try{
    const res = await baseApi.get("http://localhost:5001/comments")
    return res.data;
  }catch(err){
    console.log(err);
  }
}
export const deleteComment = async({id, password}) =>{
  try{
    const res = await baseApi.delete("http://localhost:5001/comments", {
      data : {id, password}
    })
  }catch(err){
    throw err.response;
  }
}
export const getProjectList = async() =>{
  try{
    const res = await baseApi.get("http://localhost:5001/projects")
    return res.data;
  }catch(err){
    console.log(err);
  }
}