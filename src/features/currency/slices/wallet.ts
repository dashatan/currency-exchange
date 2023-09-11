import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  balances?: { [key: string]: number };
  signs: { [key: string]: string };
} = {
  balances: {
    USD: 10000,
    EUR: 20000,
    GBP: 5000,
  },
  signs: {
    USD: "$",
    EUR: "€",
    GBP: "£",
  },
};

export const WalletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    balances: (state, action) => {
      state.balances = action.payload;
    },
  },
});
