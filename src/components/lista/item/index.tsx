import styled from "@emotion/styled";
import { Movie } from "../../../interfaces/movie.interface";

interface IMovieProps {
  movie: Movie
}

function Item({ movie }: IMovieProps) {

  const MovieRowItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;

    img {
      width: 100%;
      transform: scale(0.9);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(1);
      }
    }
  `;

  return <MovieRowItem>
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}/>
    </div>
  </MovieRowItem>;
}

export default Item;
