import Image from "next/image";
import Recipe from "../models/Recipe.model";

interface Props {
  recipe: Recipe;
}

export default function SearchResult({ recipe }: Props) {
  return (
    <div className="flex p-2">
      <Image
        src={recipe.picUrl}
        alt={recipe.title}
        width={200}
        height={120}
        className="rounded-sm object-center"
      />

      <div className="flex flex-col justify-center ml-4">
        <div className="flex flex-col justify-center ml-4 mb-2">
          <h1 className="text-2xl font-bold">{recipe.title}</h1>
          <p className="text-lg">{recipe.description}</p>
        </div>

        <div className="md:grid md:grid-cols-3 md:grid-rows-2 gap-4 ml-4">
          {recipe.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-slate-200 text-slate-700 text-sm font-semibold p-1 rounded-full mr-2 mt-2 text-center"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
