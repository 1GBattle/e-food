import { NextApiRequest, NextApiResponse } from "next";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/app/lib/firebase/firebase";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, username, passwordConfirm } = req.body;

  if (!username || !password || !email) {
    res.status(401).send({
      error: "Missing a required field",
    });
  }

  if (password !== passwordConfirm) {
    res.status(401).send({
      error: "Passwords do not match",
    });
  }

  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    ).then((userCred) => {
      const { user } = userCred;
      const { uid: id, displayName, email } = user;

      return { id, displayName, email };
    });

    res.status(200).send({
      user,
    });
  } catch (err) {
    console.log(err);
  }
}
