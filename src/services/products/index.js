export const getAll = ({ get }) => async () => {
  try {
    return (await get(`/products`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};
