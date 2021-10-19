import { catcher } from "services/helpers";

export const getFeatured = ({ get }) => async () => {
    await catcher(get)('/products/featured')
}