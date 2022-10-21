import useMovieInfo from "../../../states/hooks/useMovieInfo.hook";

import { PlayArrow, InfoOutlined } from "@mui/icons-material";
import { BackdropHorizontal, BackdropVertical, Buttons, Description, FeaturedMovie, Genres, Infos, MyListButton, Name, Points, Seasons, WatchButton, Year } from "./styles";
import { useEffect, useState } from "react";

function Destaque() {

    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const movie = useMovieInfo();

    useEffect(() => {
        if (movie.overview !== undefined) {
            setDescription(movie.overview);
        }
        if (movie.backdrop_path !== undefined) {
            setUrl(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`);
        }
    }, [movie])

    useEffect(() => {
        if (description.length > 200) {
            setDescription(description.substring(0, 200) + '...');
        }
    }, [description])

    function assistir(id: number | undefined) { }

    function minhaLista() { }

    return(
        <FeaturedMovie style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${url})`
        }}>
            <BackdropVertical>
                <BackdropHorizontal>
                    <Name>{movie?.original_name}</Name>
                    <Infos>
                        <Points>{movie?.vote_average?.toFixed(2)} pontos</Points>
                        <Year>{movie?.first_air_date?.split('-')[0]}</Year>
                        <Seasons>{movie?.number_of_seasons} temporada{movie?.number_of_seasons === 1 ? '' : 's'}</Seasons>
                    </Infos>
                    <Description>{description}</Description>
                    <Buttons>
                        <WatchButton variant="contained" size="large" onClick={() => assistir(movie?.id)}>
                            <PlayArrow fontSize="large" />
                            Assistir
                        </WatchButton>
                        <MyListButton variant="contained" size="large" onClick={minhaLista}>
                            <InfoOutlined fontSize="large" />
                            Informações
                        </MyListButton>
                    </Buttons>
                    <Genres>
                        <strong>Gêneros:</strong> {(movie?.genres?.reduce((acc: string[], curr) => {
                            acc.push(curr.name);
                            return acc;
                        }, []))?.join(', ')}
                    </Genres>
                </BackdropHorizontal>
            </BackdropVertical>
            
        </FeaturedMovie>
    );
}

export default Destaque;