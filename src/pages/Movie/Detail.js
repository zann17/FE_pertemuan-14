import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoint";


function Detail() {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
    },[id]);


    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
        
        setMovies(response.data.results);
    }

    return(
        <>
        <DetailMovie />
        <Movies movies={movies} title="Recomendations"  />
        </>
        
     
    );

}

export default Detail;