"use client";
import { useRecipeStore, useUserStore } from "@/app/state/store";
import { useEffect, useState } from "react";

interface Props {
  showWelcomeMessage: boolean;
}

export default function Navbar({ showWelcomeMessage }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const user = useUserStore((state) => state.user);
  const recipeStore = useRecipeStore();

  const handleRecipeSearch = () => {
    recipeStore.searchRecipes(searchTerm);
  };

  return (
    <div>
      {showWelcomeMessage && (
        <div className="flex justify-between px-4 py-2">
          <h1 className="text-2xl">Welcome {user?.username}!</h1>
        </div>
      )}

      <div className="m-4">
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleRecipeSearch();
          }}
          type="text"
          className="p-1 h-12 bg-slate-50 w-full outline-none rounded-xl text-lg shadow-sm"
          placeholder="Search Recipes...."
        />
      </div>
    </div>
  );
}
