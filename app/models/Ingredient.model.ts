export default interface Ingredient {
  foodItem: string;
  quantity: number;
  measurement?: "tbsp" | "cups" | "lbs"| "oz" | "slices" | "pieces" | "g" | "ml" | "l" | "kg";
}
