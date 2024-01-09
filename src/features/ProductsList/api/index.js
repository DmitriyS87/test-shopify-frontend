import { productsApiResponse } from "../../../core/moks";

export const getProductsList = async () => {
  const response = await productsApiResponse();
  return await response.json();
};
