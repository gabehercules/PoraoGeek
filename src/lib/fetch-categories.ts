import { Category } from "@/types/strapi-models";
import { getApiURL } from "@/utils/get-api-url";

export async function fetchCategoriesList(): Promise<Category[] | []> {
  try {
    const apiUrl = getApiURL();
    const response = await fetch(`${apiUrl}/categories`);

    const { data: categories } = await response.json();

    if (!categories) {
      throw new Error("Data not found - check the API availability");
    }

    return categories as Category[];
  } catch (error) {
    console.error("error", error);
    return [];
  }
}
