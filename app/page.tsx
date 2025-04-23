import CategorySelector from "@/app/components/CategorySelector";
import Navbar from "@/app/components/Navbar";
import PicCarousel from "@/app/components/PicCarousel";
import RecipeCard from "@/app/components/RecipeCard";
import { FcBullish, FcCalendar } from "react-icons/fc";

export default function Home() {
  const popularRecipes = [
    {
      picUrl: "/assets/food-images/pastas/chicken-seafood-pasta.png",
      recipeTitle: "Chicken Seafood Pasta",
      link: "/recipes/chicken-seafood-pasta",
    },
    {
      picUrl: "/assets/food-images/pastas/chicken-seafood-pasta.png",
      recipeTitle: "Chicken Seafood Pasta",
      link: "/recipes/chicken-seafood-pasta",
    },
    {
      picUrl: "/assets/food-images/pastas/chicken-seafood-pasta.png",
      recipeTitle: "Chicken Seafood Pasta",
      link: "/recipes/chicken-seafood-pasta",
    },
    {
      picUrl: "/assets/food-images/pastas/chicken-seafood-pasta.png",
      recipeTitle: "Chicken Seafood Pasta",
      link: "/recipes/chicken-seafood-pasta",
    },
  ];
  return (
    <div className="min-h-screen p-2 bg-gradient-to-b from-sky-50 to-sky-100">
      <Navbar />

      <div className="p-3">
        <CategorySelector />
      </div>

      <div>
        <h3 className="m-2 text-center font-semibold text-2xl">Featured</h3>

        <PicCarousel />
      </div>

      <main className="mt-2">
        <div className="flex justify-center items-center gap-1">
          <FcBullish className="h-8 w-8" />

          <h2 className="text-center text-2xl m-2">Popular</h2>
        </div>

        <div className="flex overflow-x-auto gap-4">
          {popularRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              picUrl={recipe.picUrl}
              title={recipe.recipeTitle}
              link={recipe.link}
            />
          ))}
        </div>

        <div className="mt-6">
          <div className="flex flex-row justify-center items-start gap-2">
            <FcCalendar className="h-7 w-7 mt-1" />
            <h3 className="text-left  text-2xl  mb-4">New</h3>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {popularRecipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                picUrl={recipe.picUrl}
                title={recipe.recipeTitle}
                link={recipe.link}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
