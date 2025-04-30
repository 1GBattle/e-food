import Ingredient from "@/app/models/Ingredient.model";
import Instruction from "@/app/models/Instruction.model";

type TagTypes =
  | "quick"
  | "breakfast"
  | "dinner"
  | "sandwich"
  | "pasta"
  | "adult"
  | "desert";

export default interface Recipe {
  id: string;
  title: string;
  picUrl: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tags?: TagTypes[];
  link?: string;
  numOfLikes?: number;
}
