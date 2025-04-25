import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase/firebase";
import User from "@/app/models/User.model";

export const addUserToDb = async (userData: User) => {
  //checks if the user is already registered in the db, if not they will be added
  const userRef = doc(db, "users", userData.id);
  const docSnapshot = await getDoc(userRef);

  if (!docSnapshot.exists) {
    await setDoc(doc(db, "users", userData.id), {
      id: userData.id,
      email: userData.email,
      likes: userData.likes,
      username: userData.username,
    });
  } else {
    return;
  }
};

export const addLike = async (userId: string, likesArr: string[]) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    likes: likesArr,
  });
};

export const removeLike = async (userId: string, likesArr: string[]) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    likes: likesArr,
  });
};
