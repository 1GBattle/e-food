import { NextApiRequest, NextApiResponse } from "next";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/app/lib/firebase/firebase";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(401).send({
      error: "Missing a required field",
    });
  }

  const user = await signInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      const { user } = userCred;
      const { email, uid: id, displayName: username } = user;
      return { email, id, username };
    })
    .catch((e) => console.error(e));

  res.status(200).send(user);
}
