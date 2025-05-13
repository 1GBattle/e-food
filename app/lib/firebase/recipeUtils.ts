import Recipe from "@/app/models/Recipe.model";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "@firebase/firestore";
import { db } from "@/app/lib/firebase/firebase";

export const getRecipes = async () => {
  let recipeArr: Recipe[] = [];
  const recipesRef = collection(db, "recipes");
  const recipeSnap = await getDocs(recipesRef);

  if (recipeSnap.empty) return recipeArr;

  recipeSnap.forEach((doc) => {
    recipeArr.push(doc.data() as Recipe);
  });

  return recipeArr;
};

export const getRecipeById = async (id: string) => {
  try {
    const recipesRef = collection(db, "recipes");
    const recipeQuery = query(recipesRef, where("id", "==", id));

    const querySnapshot = await getDocs(recipeQuery);

    if (querySnapshot.empty) return null;

    return querySnapshot.docs[0].data() as Recipe;
  } catch (error) {
    console.log("Error getting recipe by ID:", error);
    return null;
  }
};

export const getRecipesByCategory = async (category: string) => {
  try {
    const recipesRef = collection(db, "recipes");
    const recipeQuery = query(
      recipesRef,
      where("tags", "array-contains", category)
    );

    const querySnapshot = await getDocs(recipeQuery);

    if (querySnapshot.empty) return [];

    return querySnapshot.docs.map((doc) => doc.data() as Recipe);
  } catch (error) {}
};

export const addRecipe = async (recipe: Recipe) => {
  await setDoc(doc(db, "recipes", recipe.id), recipe);
};

export const editRecipe = async (recipeId: string, recipe: Recipe) => {};

export const deleteRecipe = async (recipeId: string) => {};
