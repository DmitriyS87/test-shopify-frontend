const host = "http://localhost:8080";

export const getProductsList = async () => {
  return await fetch(`${host}/products`);
};
