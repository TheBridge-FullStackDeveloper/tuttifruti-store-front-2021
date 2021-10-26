export const getAll = ({ get }) => async (page, perpage) => {
  try {
    return (await get(`/products?page=${page}&perPage=${perpage}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};

export const getByCategory = ({ post }) => async (category) => {
  try {
    return (await post(`/products?category=${category}`)).data;
  } catch (error) {
    console.info("Cannot get products by category");
    return false;
  }
};
