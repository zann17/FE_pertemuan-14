// import creatslice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constants/data";


const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addmovie(state, action) {
            // add movie to movies
            state.movies.push(action.payload)
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        },
    },
});

// Generate action & reducers
const moviesReducer = movieSlice.reducer;
const { addmovie, updateMovies } = movieSlice.actions;


// Export action & reducers
export default moviesReducer;
export {addmovie, updateMovies};