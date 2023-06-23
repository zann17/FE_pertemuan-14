/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button/index";
import StyledHero from "./Hero.styled";
import axios from "axios";
import ENDPOINTS from "../../components/utils/constants/endpoint";

function Hero() {
   // Membuat state movie
   const [movie, setMovie] = useState ("");
   const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
   const trailer =  movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
       
   useEffect(() => {
    getDetailMovie();
  }, []);

   // Mengambil 1 data dari trending
   async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.HERO);
    return response.data.results[0];
   }

   // Mendapatkan detail movie trending
   async function getDetailMovie() {
    // Mengambill id 
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail id
    const response = await axios(ENDPOINTS.TRENDING(id));

    setMovie(response.data);
   }

    return(
        <StyledHero >
        <div>
            <section>
                <div className="hero_left">
                    <h2>{movie.title}</h2>
                    <h3>{genres}</h3>
                    <p>{movie.overview}</p>
                    <Button md  as ="a" href={trailer} target="_blank">Watch Trailer</Button>
                </div>
                <div className="hero_right">
                    <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt="placeholder" />
                </div>
            </section>
        </div>
        </StyledHero>
    )
}

export default Hero;