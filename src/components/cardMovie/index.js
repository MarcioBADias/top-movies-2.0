import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
    Card, 
    CardBody, 
    CardImg, 
    CardSubtitle,
    CardTitle, 
    Container
} from "reactstrap";

import { FaStar } from 'react-icons/fa'
import { imgAPI } from "../../apiData";

import * as C from './styles';
import { 
    BsFillFileEarmarkTextFill, 
    BsGraphUp, 
    BsHourglassSplit, 
    BsWallet2 
} from "react-icons/bs";

const CardMovie = ({size, movie, showLink = true}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);
        return () => {
        window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return(
        <Card 
        color='dark' 
        className={screenWidth > 700 ?
            `w-${size} mx-1 my-3`:
            "mx-1 my-3"}
        >
            <CardImg
                alt="Card image cap"
                src={imgAPI + movie.poster_path}
                top
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">
                    {movie.title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-warning"
                    tag="h6"
                >
                    <FaStar/> {movie.vote_average}
                </CardSubtitle>
                {showLink && 
                <Link to={`/movie/${movie.id}`}>
                    <C.Button>
                        Detalhes
                    </C.Button>
                </Link>
                }               
                {!showLink &&
                    <Container className="mt-4">
                <CardSubtitle className="mb-4" tag="h6">
                    <BsWallet2 className="mb-2 text-warning"/> Orçamento:
                    <p>
                        {movie.budget}
                    </p>
                </CardSubtitle>
                <CardSubtitle className="mb-4" tag="h6">
                    <BsGraphUp className="mb-2 text-warning"/> Receita:
                    <p>
                        {movie.revenue}
                    </p>
                </CardSubtitle>
                <CardSubtitle className="mb-4" tag="h6">
                    <BsHourglassSplit className="mb-2 text-warning"/> Duração:
                    <p>
                            {movie.runtime} minutos.
                    </p>
                </CardSubtitle>
                <CardSubtitle className="mb-4" tag="h6">
                    <BsFillFileEarmarkTextFill className="mb-2 text-warning"/> Descrição:
                    <p>
                        {movie.overview}
                    </p>
                </CardSubtitle>
                </Container>
                }
            </CardBody>
        </Card>
    )
}

export default CardMovie;