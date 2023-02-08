import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { keyAPI, urlAPI } from '../apiData';
import CardMovie from '../components/cardMovie';


const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getAPIMovies = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        
        setTopMovies(data.results);
    };

    useEffect(()=>{
        const topMoviesURL = `${urlAPI}top_rated?${keyAPI}`;
        getAPIMovies(topMoviesURL);
    }, [])
    return (
        <Container>
            <Container>
            <h2 className='my-4 text-center'>
                Top <span>20 melhores</span> filmes no cinema:
            </h2>
            </Container>
            <Container className='d-flex flex-wrap justify-content-around'>
            {topMovies === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && topMovies
                .map(movie => <CardMovie size='25' movie={movie}/>)}
            </Container>
        </Container>
    )
}

export default Home;