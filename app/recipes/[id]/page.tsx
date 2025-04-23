import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { FaRegHeart, FaRegLightbulb } from "react-icons/fa";
import Ingredient from "@/app/models/Ingredient.model";
import IngredientList from "@/app/components/IngredientList";
import InstructionsList from "@/app/components/InstructionsList";
import Instruction from "@/app/models/Instruction.model";
import { lorem } from "next/dist/client/components/react-dev-overlay/ui/utils/lorem";

export default function RecipePage() {
  const ingredients: Ingredient[] = [
    {
      foodItem: "Noodles",
      quantity: 2,
      measurement: "cups",
    },
    {
      foodItem: "Shrimp",
      quantity: 1,
      measurement: "lbs",
    },
    {
      foodItem: "Andouille Sausage ",
      quantity: 1,
      measurement: "lbs",
    },
    {
      foodItem: "Cajun Seasoning ",
      quantity: 5,
      measurement: "tbsp",
    },
    {
      foodItem: "Paprika ",
      quantity: 2,
      measurement: "tbsp",
    },
    {
      foodItem: "Salt",
      quantity: 2,
      measurement: "tbsp",
    },
    {
      foodItem: "Black Pepper ",
      quantity: 2,
      measurement: "tbsp",
    },
    {
      foodItem: "Cumin ",
      quantity: 2,
      measurement: "tbsp",
    },
    {
      foodItem: "Alfredo Sauce ",
      quantity: 4,
      measurement: "cups",
    },
  ];

  const instructions: Instruction[] = [
    {
      text: lorem,
      title: "Lorem Ipsum",
    },
    {
      text: lorem,
      title: "Lorem Ipsum",
    },
  ];
  return (
    <div>
      <div className="relative">
        <Image
          className="w-full shadow-md bg-blend-overlay  brightness-75"
          src={"/assets/food-images/pastas/chicken-seafood-pasta.png"}
          width={300}
          height={300}
          alt="food item"
        />

        <div className="absolute bottom-1 left-0  mt-8 text-left px-2 flex items-center justify-between w-full">
          <h2 className="text-2xl font-bold text-white whitespace-nowrap w-2/3 text-ellipsis truncate">
            Recipe name goes here
          </h2>

          <FaRegHeart className="h-6 w-6" color="white" />
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
        consequuntur cupiditate, dignissimos, dolore dolorem dolores est fugiat
        harum id, mollitia nesciunt officia repellat repellendus veritatis
        voluptate voluptatum! Voluptatum!
      </aside>

      <main>
        <IngredientList ingredients={ingredients} />

        <InstructionsList instructions={instructions} />
      </main>
    </div>
  );
}
