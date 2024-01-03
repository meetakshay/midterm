


import { configureStore } from "@reduxjs/toolkit";
// import NavMenuSlice from "./NavMenuSlice";
import NavMenuSlice from "./NavMenuSlice";
import productSlice from "./productSlice";
import categoriesSlice from "./categoriesSlice";
import cartSlice from "./cartSlice";
import wishListSlice from "./wishListSlice";
import formSlice from "./formSlice";



export const store = configureStore({
    reducer : {
        menubar : NavMenuSlice,
        products: productSlice,
    categories: categoriesSlice,
        cart:cartSlice,
        wishlist: wishListSlice,
        form : formSlice,
        
    }
})