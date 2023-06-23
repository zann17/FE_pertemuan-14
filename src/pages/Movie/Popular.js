import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/MovieSlice";

function Popular() {
    const dispatch = useDispatch();

    useEffect(() => {
       getPopularMovies();
    });


    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;

        dispatch(updateMovies(movies));
    }

    return (
        <>
            <Hero />
            <Movies title='Popular Movie' />
        </>
    );
}

export default Popular;