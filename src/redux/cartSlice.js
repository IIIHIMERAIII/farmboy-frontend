import { createSlice } from "@reduxjs/toolkit";

// const testdata = [
// {
//     title: "Soup - Knorr, Chicken Noodle",
//     price: "7.94",
//     id: "63ebdd17391ac39bf2662cf3",
//     qty: 12
//     },
//     {
//     title: "Soup - Knorr, Chicken Noodle",
//     price: "7.94",
//     id: "63ebdd17391ac39b123123f2662cf3",
//     qty: 1
//     },
//     {
//     title: "Soup - Knorr, Chicken Noodle",
//     price: "7.94",
//     id: "63ebdd1739112312ac39bf2662cf3",
//     qty: 1
//     },
//     {
//     title: "Soup - Knorr, Chicken Noodle",
//     price: "7.94",
//     id: "63ebdd123117391ac39bf2662cf3",
//     qty: 1
//     },
//     {
//     title: "Soup - Knorr, Chicken Noodle",
//     price: "7.94",
//     id: "63ebd123123d17391ac39bf2662cf3",
//     qty: 1
//     },
//     {
//     title: "Soup - Knorr, Chicken Noodle",
//     price: "7.94",
//     id: "63eb213321dd17391ac39bf2662cf3",
//     qty: 1
//     }  
// ]

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        order: {
            owner: [],
            products: [],
        },
    },

    reducers: {
        addProduct(state, action) {
            const itemIndex = state.products.findIndex(product => product.id === action.payload._id)
            if (itemIndex >= 0) {
                state.products[itemIndex].qty += 1;
            }
            else {
                const {title, price, _id } = action.payload
                const tempProduct = { title, price, id: _id, qty: 1 };
                state.products.push(tempProduct);
            }
        },
        dellProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        decreaseProductQuantity(state, action) {
            const itemIndex = state.products.findIndex(product => product.id === action.payload);
            if (state.products[itemIndex].qty > 1) {
                state.products[itemIndex].qty -= 1;
            }
            else if (state.products[itemIndex].qty === 1) {
                const products = state.products.filter(product => product.id !== action.payload);
                state.products = products
            }
        },
        increaseCartQuantity(state, action) {
            const itemIndex = state.products.findIndex(product => product.id === action.payload);
            state.products[itemIndex].qty += 1;
        },
        addOrder(state, action) {
            const cart = state.products;
            const owner = action.payload;
            if (cart.length === 0) {
                return alert("Ви ще нічого не додали до кошику :(")
            }
            else if (cart.length > 0) {
                state.order.products.push(cart);
                state.order.owner.push(owner)
            }
        },
    }
});

export const {
    addProduct,
    dellProduct,
    decreaseProductQuantity,
    increaseCartQuantity,
    addOrder
} = cartSlice.actions;

export default cartSlice.reducer;