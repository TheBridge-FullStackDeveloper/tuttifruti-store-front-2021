import { catcher } from "services/helpers";
console.log("entra entra")
export const getFeatured = ({ get }) => async () => {
    return await catcher(get)('/products/featured')
}