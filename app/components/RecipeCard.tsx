import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Recipe from "@/app/models/Recipe.model";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { title, picUrl, id } = recipe;
  return (
    <>
      <Link href={`/recipes/${id}`} className="relative shrink-0">
        <img
          className="w-[300px] h-44 rounded-lg shadow-md bg-blend-overlay brightness-75"
          src={`${picUrl}`}
          alt={title}
        />

        <div className="absolute bottom-0 left-0  mt-10 text-left px-2 flex items-center justify-between w-full">
          <h2 className="text-xl font-bold text-white whitespace-nowrap w-[240px] text-ellipsis truncate">
            {title}
          </h2>

          <FaRegHeart className="h-6 w-6" color="white" />
        </div>
      </Link>
    </>
  );
}
