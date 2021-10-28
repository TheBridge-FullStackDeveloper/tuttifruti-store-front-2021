export const getAll = ({ get }) => async (page, perpage) => {
  try {
    return (await get(`/products?page=${page}&perPage=${perpage}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};

export const getBySearch = ({ post }) => async (search) => {
  try {
    return (await post(`/products?search=${search}`)).data;
  } catch (error) {
    console.info("Cannot get searched products");
    return false;
  }
};
