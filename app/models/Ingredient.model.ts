export default interface Ingredient {
  foodItem: string;
  quantity: number;
  measurement?: "tbsp" | "cups" | "lbs";
}
