import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [], // or whatever initial state your `cart` needs
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem: (state, action) => {
            console.log("current state",state);
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            state.items = state.items.filter((item)=>{
                return item.card.info.id !== action.payload;
             });
        },
        clearCart:(state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;