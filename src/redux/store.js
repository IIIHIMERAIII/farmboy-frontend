import { configureStore } from "@reduxjs/toolkit";
import baketReducer from '../redux/baketSlice'

export default configureStore({
    reducer: {
        baket: baketReducer
    }
})