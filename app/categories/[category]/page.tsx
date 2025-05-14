"use client";
import SearchResult from "@/app/components/SearchResult";
import { useRecipeStore } from "@/app/state/store";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function CategoryPage() {
  const { category } = useParams();
  const router = useRouter();

  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  useMemo(() => {
    useRecipeStore.getState().getRecipesByCategory(category as string);

    return () => {
      useRecipeStore.getState().clearStore();
    };
  }, [category]);

  if (!category) {
    router.push("/not-found");
  }

  console.log("recipes", filteredRecipes);

  return (
    <>
      {recipes.length > 0 && !filteredRecipes && (
        <div className="flex flex-col gap-10 h-screen">
          {recipes.map((recipe) => (
            <SearchResult key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      {filteredRecipes?.length! > 0 && (
        <div className="flex flex-col gap-10 h-screen">
          {filteredRecipes?.map((recipe) => (
            <SearchResult key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      {recipes.length === 0 && filteredRecipes?.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">No recipes found</h1>
          <p className="text-lg">Try searching for something else</p>
        </div>
      )}
    </>
  );
}
