import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',

    initialState: {
        items: [], // Initialize items as an empty array
    },

    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((prevItem) => prevItem.name === item.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({...item, quantity: 1});
            }
        },

        removeItem: (state, action) => {
            const item = action.payload;
            state.items = state.items.filter(prevItem => prevItem.name !== item.name);
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const item = state.items.find((prevItem) => prevItem.name === name);
            item.quantity = quantity;
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;