import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { keyAPI, urlAPI } from "../apiData";
import { Container } from "reactstrap";
import CardMovie from "../components/cardMovie";

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    
    const getAPIMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
    };

    useEffect(()=>{
        const movieURL = `${urlAPI}${id}?${keyAPI}`;
        getAPIMovies(movieURL);
    }, [])

    return (
        <Container>
            <h2 className='my-3 text-center'>
                Veja mais informações sobre o filme <span>abaixo</span>: 
            </h2>
            <Container className='d-flex justify-content-around'>
                {!movie && <p>Carregando...</p>}
                {movie && 
                    <CardMovie size='50' movie={movie} 
                    showLink={false}/>
                }
            </Container>
        </Container>
    )
}

export default Movie;