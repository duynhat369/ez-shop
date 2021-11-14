import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    //add product to cart (the product may already exist in the cart), if already -> increase quantity
    addToCart(state, action) {
      // newItem = { id, product, quantity }
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      //product already exist in cart -> increase quantity
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        //product not exist in cart -> add product to cart
        state.cartItems.push(newItem);
      }
    },

    //reset quantity for the products in cart
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //check product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);

      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },

    removeFromCart(state, action) {
      const idNeedToRemove = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;
