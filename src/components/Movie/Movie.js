import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";


function Movie(props){
    const {movie} = props;
    return (
        <StyledMovie>
            <img 
            src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title} />
            <Link  to={`/movie/${movie.id}`} className="a">
            <h3>{movie.title}</h3>
            </Link>
            <p>{movie.year || movie.release_date.substring(0,4)}</p>
        </StyledMovie>
    )
}

export default Movie;