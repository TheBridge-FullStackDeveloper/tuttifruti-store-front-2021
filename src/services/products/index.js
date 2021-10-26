export const getAll = ({ get }) => async (page, perpage) => {
  try {
    return (await get(`/products?page=${page}&perPage=${perpage}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};

export const getProduct = ({get}) =>
async (id) => {
  try {
    return (await get(`/products?id=${id}`)).data;
  } catch (error) {
    console.info("Cannot find specified product")
  }
}