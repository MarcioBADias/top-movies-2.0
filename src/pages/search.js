import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import CardMovie from '../components/cardMovie';
import { keyAPI, searchAPI } from '../apiData';

const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchMovie = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        
        setMovies(data.results);
    };

    useEffect(()=>{
        const searchURL = `${searchAPI}?${keyAPI}&query=${query}`;
        getSearchMovie(searchURL);
    }, [query]);
    return (
        <Container>
            <h2 className='my-2 text-center'>
                Resultados para: <span>{query}</span>
            </h2>
            <Container className='d-flex flex-wrap justify-content-around'>
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map(movie => <CardMovie size='25' movie={movie}/>)}
            </Container>
        </Container>
        
    )
}

export default Search;