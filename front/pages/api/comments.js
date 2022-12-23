
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler (req, res) {
  const {id, name, password, comment, createdAt} = req.body;
  if (req.method === "GET") {
    const data = await prisma.comments.findMany({
      select:{
        comment:true,
        id:true,
        name:true,
        created_at:true,
      },
      orderBy:{
        created_at:"desc"
      }
    });
    return res.status(200).json(data);
  }
  if (req.method === "POST") {
    const hashedPassword = await bcrypt.hash(password , 10);
    const newComment = await prisma.comments.create({
      data : {name, password: hashedPassword, comment}
    });
    return res.status(200).json({ok: true});
  }
  if (req.method === "DELETE") {
    const data = await prisma.comments.findFirst({
      where:{id}
    })
    const hashedPassword = await bcrypt.compare(password , data.password);
    if(hashedPassword){
      const deleteComment = await prisma.comments.delete({
        where: {id},
      });
    }else{
      return res.status(400).send("비밀번호가 다릅니다.");
    }
    return res.status(200).json({ ok: true });
  }
}
