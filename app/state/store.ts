import { create } from "zustand";
import User from "@/app/models/User.model";
import Recipe from "@/app/models/Recipe.model";

interface UserStore {
  setUser: (user: User) => void;
  logout: () => void;
  user: User | null;
  addLike: (recipeId: string, userId: string) => void;
}

interface RecipeStore {
  initializeStore: () => void;
  recipes: Recipe[];
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logout: () => set({ user: null }),
  addLike: () => {},
}));

export const useRecipeStore = create<RecipeStore>()((set) => ({
  recipes: [],
  initializeStore: () => set({ recipes: [] }),
}));
