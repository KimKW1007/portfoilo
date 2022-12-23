import { projectConnect } from '../connect/project';
import { Router } from 'express';

const projectRouter = Router();

projectRouter.get('/', async (req, res) => {
  try {
    const projects = await projectConnect.getProject();
    res.status(200).send(projects);
  } catch (error) {
    res.status(401).send("오류");
  }
});

