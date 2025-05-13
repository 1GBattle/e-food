import { create } from "zustand";
import User from "@/app/models/User.model";
import Recipe from "@/app/models/Recipe.model";
import {
  getRecipes,
  getRecipeById,
  getRecipesByCategory,
} from "@/app/lib/firebase/recipeUtils";

interface UserStore {
  setUser: (user: User) => void;
  logout: () => void;
  user: User | null;
  addLike: (recipeId: string, userId: string) => void;
}

interface RecipeStore {
  initializeStore: () => void;
  getRecipeById: (id: string) => void;
  getRecipesByCategory: (category: string) => void;
  recipes: Recipe[];
  currentRecipe?: Recipe | null;
  searchRecipes: (searchTerm: string) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logout: () => set({ user: null }),
  addLike: () => {},
}));

export const useRecipeStore = create<RecipeStore>()((set) => ({
  recipes: [],
  initializeStore: async () =>
    await getRecipes().then((recipes) => {
      set({ recipes: recipes });
    }),
  getRecipeById: async (id: string) =>
    await getRecipeById(id).then((recipe) => {
      set({ currentRecipe: recipe });
    }),
  getRecipesByCategory: async (category: string) =>
    await getRecipesByCategory(category).then((recipes) => {
      set({ recipes: recipes });
    }),
  searchRecipes: (searchTerm: string) => {
    const filteredRecipes = useRecipeStore
      .getState()
      .recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    set({ recipes: filteredRecipes });
  },
}));
