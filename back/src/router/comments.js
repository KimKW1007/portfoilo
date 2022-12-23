import { commentConnect } from '../connect/comment.js';
import { Router } from 'express';

const commentRouter = Router();

commentRouter.post('/', async (req, res, next) => {
  try {
    const { name, password, comment } = req.body;
    const newComment = await commentConnect.addComment({
      name,
      password,
      comment
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(401).send("오류");
  }
});
commentRouter.get('/', async (req, res, next) => {
  try {
    const comments = await commentConnect.getComment();
    res.status(200).send(comments);
  } catch (error) {
    res.status(401).send("오류");
  }
});
commentRouter.delete('/', async (req, res, next) => {
  try {
    const { id, password } = req.body;
    await commentConnect.removeComment({
      id, password
    });
    res.status(200).send("삭제완료");
  } catch (error) {
    res.status(401).send("오류");
  }
});
export {commentRouter};