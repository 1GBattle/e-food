import Ingredient from "@/app/models/Ingredient.model";
import Instruction from "@/app/models/Instruction.model";

export default interface Recipe {
  id: number;
  name: string;
  picUrl: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
}
