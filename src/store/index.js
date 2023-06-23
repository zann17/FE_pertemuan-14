// import configureStore
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/MovieSlice/index";


/**
 * Buat store: state global
 * menyimpan slice reducer
 */
const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

export default store;