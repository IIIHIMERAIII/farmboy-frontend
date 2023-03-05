import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { SendOrder } from "../api/products";
// import MOCK_DATA from '../Fakebd/MOCK_DATA.json'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        order: {
            owner: {},
            products: [],
        },
    },

    reducers: {
        addProduct(state, action) {
            const itemIndex = state.products.findIndex(product => product.id === action.payload._id)
            if (itemIndex >= 0) {
                state.products[itemIndex].qty += 1;
                Notiflix.Notify.success("Товар додано до кошику")
            }
            else {
                const {title, price, _id } = action.payload
                const tempProduct = { title, price, id: _id, qty: 1 };
                state.products.push(tempProduct);
                Notiflix.Notify.success("Товар додано до кошику")
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
                Notiflix.Notify.failure("Ви ще нічого не додали до кошику :(")
            }
            else if (cart.length > 0) {
                state.order.products.push(...cart);
                state.order.owner = owner;
                SendOrder(state.order)
                state.products = [];
                document.querySelector('#order-form').reset()
                Notiflix.Notify.success("Ваше замовлення відправлено в надійні руки")
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