import { useSetRecoilState } from "recoil";
import http from "../../common/http";
import { Movie } from "../../interfaces/movie.interface";
import { MovieInfo } from "../../interfaces/moviInfo.interface";
import { Pagination } from "../../interfaces/pagination.interface";
import {
  getMovieInfoState,
  listaAcaoState,
  listaComediaState,
  listaDocumentarioState,
  listaEmAltaState,
  listaOriginaisState,
  listaRecomendadosState,
  listaRomanceState,
  listaTerrorState,
} from "../atom";

export default function useMovieAction() {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  const setOriginais = useSetRecoilState<Movie[]>(listaOriginaisState);
  const setRecomendados = useSetRecoilState<Movie[]>(listaRecomendadosState);
  const setEmAlta = useSetRecoilState<Movie[]>(listaEmAltaState);
  const setAcao = useSetRecoilState<Movie[]>(listaAcaoState);
  const setComedia = useSetRecoilState<Movie[]>(listaComediaState);
  const setTerror = useSetRecoilState<Movie[]>(listaTerrorState);
  const setRomances = useSetRecoilState<Movie[]>(listaRomanceState);
  const setDocumentarios = useSetRecoilState<Movie[]>(listaDocumentarioState);

  const setMovie = useSetRecoilState<MovieInfo>(getMovieInfoState);

  return {
    getOriginais,
    getRecomendados,
    getEmAlta,
    getAcao,
    getComedia,
    getTerror,
    getRomance,
    getDocumentarios,
    getMovieInfo,
  };

  function getMovieInfo(id: number, type: string) {
    http.get<MovieInfo>(
      `${type}/${id}?&language=pt-BR&api_key=${API_KEY}`
    ).then(res => setMovie(res.data));
    
  }

  function getOriginais() {
    http.get<Pagination<Movie>>(
      `discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
    ).then(res => {
      setOriginais(res.data.results);
      getMovieInfo(res.data.results[0].id, "tv");
    });
  }

  async function getRecomendados() {
    const res = await http.get<Pagination<Movie>>(
      `trending/all/week?&language=pt-BR&api_key=${API_KEY}`
    );

    setRecomendados(res.data.results);
  }

  async function getEmAlta() {
    const res = await http.get<Pagination<Movie>>(
      `movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
    );

    setEmAlta(res.data.results);
  }

  async function getAcao() {
    const res = await http.get<Pagination<Movie>>(
      `discover/movie?&with_genres=28&language=pt-BR&api_key=${API_KEY}`
    );

    setAcao(res.data.results);
  }

  async function getComedia() {
    const res = await http.get<Pagination<Movie>>(
      `discover/movie?&with_genres=35&language=pt-BR&api_key=${API_KEY}`
    );

    setComedia(res.data.results);
  }

  async function getTerror() {
    const res = await http.get<Pagination<Movie>>(
      `discover/movie?&with_genres=27&language=pt-BR&api_key=${API_KEY}`
    );

    setTerror(res.data.results);
  }

  async function getRomance() {
    const res = await http.get<Pagination<Movie>>(
      `discover/movie?&with_genres=10749&language=pt-BR&api_key=${API_KEY}`
    );

    setRomances(res.data.results);
  }

  async function getDocumentarios() {
    const res = await http.get<Pagination<Movie>>(
      `discover/movie?&with_genres=99&language=pt-BR&api_key=${API_KEY}`
    );

    setDocumentarios(res.data.results);
  }
}
