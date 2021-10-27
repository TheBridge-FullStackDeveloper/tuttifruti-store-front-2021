
import { catcher } from "services/helpers";

export const getFeatured = ({ get }) => async () => {
    return await catcher(get)('/products/featured')
}
export const getAll = ({ get }) => async (page, perpage) => {
  try {
    return (await get(`/products?page=${page}&perPage=${perpage}`)).data;
  } catch (error) {
    console.info("Cannot get products");
    return false;
  }
};
