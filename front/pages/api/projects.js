import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler (req, res) {
  if (req.method === "GET") {
    const data = await prisma.project.findMany({
      include:{
        tools: {
          select:{
            tools:true
          }
        }
      }
    });
    if(!data) return res.status(400).send("데이터 없음");
    return res.status(200).json(data);
  }
}
