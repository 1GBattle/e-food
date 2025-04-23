import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).send({
      error: "Email or password is required",
    });
  }

  try {
  } catch (err) {
    console.error(err);
  }
}
