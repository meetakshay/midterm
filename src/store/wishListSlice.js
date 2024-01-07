import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    wishlistItems: [],
    
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState ,
  reducers: {


      isLikedToggle : (state, action) => {
        const product = action.payload
        const itemExist = state.wishlistItems.find(item => item.id === product.id)
        const index = state.wishlistItems.indexOf(itemExist)
        if(itemExist ){
          state.wishlistItems.splice(index, 1)
        }else{
          state.wishlistItems.push(product)
        }
      }

  },
});

export const {isLikedToggle} = wishListSlice.actions;
export default wishListSlice.reducer;
