import { IProduct } from "../../../types/product";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProduct extends IProduct {
  orderQuantity: number;
}

interface InitialState {
  products: CartProduct[];
  city: string;
  shippingAddress: string;
}

const initialState: InitialState = {
  products: [],
  city: "",
  shippingAddress: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToAdd) {
        productToAdd.orderQuantity += 1;
        return;
      }

      state.products.push({ ...action.payload, orderQuantity: 1 });
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearCart: (state) => {
      state.products = [];
      state.city = "";
      state.shippingAddress = "";
    },
  },
});

//* Products

export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.products.map((product) => ({
      product: product._id,
      quantity: product.orderQuantity,
      color: "White",
    })),
    shippingAddress: `${state.cart.shippingAddress} - ${state.cart.city}`,
    paymentMethod: "Online",
  };
};

//* Payment

export const subTotalSelector = (state: RootState) => {
  const totalQuantity = state.cart.products.reduce((acc, product) => {
    return acc + product.orderQuantity;
  }, 0);

  return totalQuantity * 500;
};

// export const shippingCostSelector = (state: RootState) => {
//   if (
//     state.cart.city &&
//     state.cart.city === "Dhaka" &&
//     state.cart.products.length > 0
//   ) {
//     return 60;
//   } else if (
//     state.cart.city &&
//     state.cart.city !== "Dhaka" &&
//     state.cart.products.length > 0
//   ) {
//     return 120;
//   } else {
//     return 0;
//   }
// };

//

//* Address

// export const citySelector = (state: RootState) => {
//   return state.cart.city;
// };
export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);

  return subTotal;
};

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
