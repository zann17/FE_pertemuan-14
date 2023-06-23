import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

import { updateMovies } from "../features/MovieSlice";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies);

  dispatch(updateMovies(movies));

  return (
    <>
    <Hero />
    <Movies title="Latest Movies" />
    </>
  );
}

export default Home;