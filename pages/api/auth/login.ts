import { createUser, getUsers } from "@/lib/prisma/users";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const createdUser = await createUser({ id: 1, email: "kaliopi@yahoo.com" });
  // const users = await getUsers();
  console.log(createdUser);

  const body = req.body;
  if (!body.email || !body.password) {
    return res.status(400).json({ data: "First or last name not found" });
  }
  res.status(200).json({ ...body });
}