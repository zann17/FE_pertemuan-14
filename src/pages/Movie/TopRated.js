import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../components/utils/constants/endpoint";
import { updateMovies } from "../../features/MovieSlice";
import { useDispatch } from "react-redux";

function NowPlaying() {
    const dispatch = useDispatch();

    useEffect(() => {
       getTopRatedMovies();
    });


    async function getTopRatedMovies() {
        const response = await axios(ENDPOINTS.TOPRATED);
        const movies = response.data.results;

        dispatch(updateMovies(movies));
    }
    return (
        <>
            <Hero />
            <Movies title='Top Rated Movies' />
        </>
    );
}

export default NowPlaying;