import Recipe from "@/app/models/Recipe.model";
import { collection, doc, getDocs, setDoc } from "@firebase/firestore";
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

export const addRecipe = async (recipe: Recipe) => {
  await setDoc(doc(db, "recipes", recipe.id), recipe);
};

export const editRecipe = async (recipeId: string, recipe: Recipe) => {};

export const deleteRecipe = async (recipeId: string) => {};
