"use client";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { FaRegHeart, FaRegLightbulb } from "react-icons/fa";
import IngredientList from "@/app/components/IngredientList";
import InstructionsList from "@/app/components/InstructionsList";
import { useParams, useRouter } from "next/navigation";
import { useRecipeStore, useUserStore } from "@/app/state/store";
import { useMemo } from "react";

export default function RecipePage() {
  const { id } = useParams();
  const router = useRouter();
  const recipe = useRecipeStore((state) => state.currentRecipe);

  useMemo(() => {
    useRecipeStore.getState().getRecipeById(id as string);
  }, []);

  if (recipe)
    return (
      <div>
        <div className="relative flex justify-center items-center xl:p-8">
          <Image
            className="w-full h-[460px] lg:h-[600px] shadow-lg bg-blend-overlay brightness-75 xl:w-2/3"
            src={recipe.picUrl}
            width={300}
            height={300}
            alt="food item"
            priority
          />

          <div className="absolute bottom-2 right-0 mt-8 text-left flex items-center justify-between w-full px-8 xl:w-8/12 xl:right-1/6 xl:justify-between xl:bottom-8">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap w-2/3 text-ellipsis truncate xl:text-4xl">
              {recipe.title}
            </h2>

            <FaRegHeart
              className="h-7 w-7 xl:h-8 xl:w-8 cursor-pointer"
              color="white"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-4 px-8 py-4">
          <div className="flex flex-row gap-2 items-center justify-center">
            <CiClock2 className="h-6 w-6" />
            <p className="text-xl">30 minutes</p>
          </div>

          <div className="flex flex-row gap-2 items-center justify-center">
            <FaRegLightbulb className="h-6 w-6" />
            <p className="text-xl">Intermediate</p>
          </div>
        </div>

        <aside className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aut
          consequuntur cupiditate, dignissimos, dolore dolorem dolores est
          fugiat harum id, mollitia nesciunt officia repellat repellendus
          veritatis voluptate voluptatum! Voluptatum!
        </aside>

        <main>
          <IngredientList ingredients={recipe.ingredients} />

          <InstructionsList instructions={recipe.instructions} />
        </main>
      </div>
    );
}
