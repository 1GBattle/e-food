import Ingredient from "@/app/models/Ingredient.model";
import { BiBasket } from "react-icons/bi";

interface Props {
  ingredients: Ingredient[];
}

export default function IngredientList({ ingredients }: Props) {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-4 px-8 py-4">
        <BiBasket className="h-7 w-7" />
        <h3 className="text-xl font-semibold">Ingredients</h3>
      </div>

      <ol className="px-12">
        {ingredients.map((ingredient) => (
          <li className="flex flex-row items-center justify-between gap-4 px-4 py-4">
            <p className="text-xl ">
              {ingredient.quantity} {ingredient.measurement}{" "}
              {ingredient.foodItem}
            </p>

            <input className="rounded-full h-5 w-5" type="checkbox" />
          </li>
        ))}
      </ol>
    </div>
  );
}
