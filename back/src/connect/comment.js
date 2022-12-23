import bcrypt from "bcrypt";
import {Comments} from "../db/index.js";

class commentConnect {
  static async addComment({ comment, name, password }) {
    // 비밀번호 해쉬화
    const hashedPassword = await bcrypt.hash(password, 10);

    // db에 저장
    const createdComment = await Comments.create({
      name,
      comment,
      password: hashedPassword,
    });
    return createdComment;
  }
  
  static async getComment() {
    const comments = await Comments.findAll();
    return comments;
  }
  static async removeComment({ id, password }) {

    const data = await Comments.findByCommentId(id);
    
    const hashedPassword = await bcrypt.compare(password , data.password);
    if(!hashedPassword) return {errorMessage : "비밀번호 틀림"}
    if(hashedPassword){
      const deleteComment = await Comments.delete({
        id
      });
      return deleteComment;
    }
  }
}
export {commentConnect};