import { CommentModel } from '../schema/Comments.js';

class Comments {
  // 새로운 댓글 생성
  static async create({ comment, name, password }) {
    return CommentModel.create({
      comment,
      name,
      password
    });
  }

  static async findAll() {
    return CommentModel.find({}).sort({ createdAt: -1 });
  }
  static async findByCommentId(id) {
    return CommentModel.findById({id});
  }


  static async delete(id) {
    return CommentModel.findOneAndDelete({ id });
  }



}

export { Comments };