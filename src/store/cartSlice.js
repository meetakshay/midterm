
import { createSlice } from "@reduxjs/toolkit";

const LOCAL_CART = 'CartSlice';     //confusing ****

const loadState = () => {   //GET
  try{
    const cart = localStorage.getItem(LOCAL_CART);
    if(cart === null){
      return undefined;
    }
    return JSON.parse(cart);
  }catch(error){
    return undefined;
  }
}

const saveState = (state) => {   //SET
  try{
    const cart = JSON.stringify(state);
    localStorage.setItem(LOCAL_CART, cart)
  }catch(error){
    console.error("An error occurred", error)
  }
}


const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState : loadState() || initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const item = state.products.find((item) => item.id === newItem.id);

      if (item) {
        item.quantity += quantity;
      } else {
        state.products.push( newItem );
      }
      saveState(state)
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);

      if (item) {
        item.quantity++;
      }
      saveState(state)

    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
      saveState(state)

    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      saveState(state)

    },
    resetCart: (state) => {
      state.products = [];
      saveState(state)

    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity, // changed from drecreaseQuantity to decreaseQuantity
  deleteItem,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
