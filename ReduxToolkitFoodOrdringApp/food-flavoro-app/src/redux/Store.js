import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/slices/CartSlice";
import CategorySliace from "../redux/slices/CategorySlice";
import SearchSlice from "../redux/slices/SearchSlice"

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySliace,
    search: SearchSlice,
  },
});
export default Store;
