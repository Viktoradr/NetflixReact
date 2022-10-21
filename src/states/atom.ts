import { atom } from "recoil";
import { Movie } from "../interfaces/movie.interface";
import { MovieInfo } from "../interfaces/moviInfo.interface";

export const getMovieInfoState = atom<MovieInfo>({
    key: "getMovieInfoState",
    default: {} as MovieInfo
});

export const listaOriginaisState = atom<Movie[]>({
    key: "listaOriginaisState",
    default: []
});

export const listaRecomendadosState = atom<Movie[]>({
    key: "listaRecomendadosState",
    default: []
});

export const listaEmAltaState = atom<Movie[]>({
    key: "listaEmAltaState",
    default: []
});

export const listaAcaoState = atom<Movie[]>({
    key: "listaAcaoState",
    default: []
});

export const listaComediaState = atom<Movie[]>({
    key: "listaComediaState",
    default: []
});

export const listaTerrorState = atom<Movie[]>({
    key: "listaTerrorState",
    default: []
});

export const listaRomanceState = atom<Movie[]>({
    key: "listaRomanceState",
    default: []
});

export const listaDocumentarioState = atom<Movie[]>({
    key: "listaDocumentarioState",
    default: []
});