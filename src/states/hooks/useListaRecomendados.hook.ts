import { useRecoilValue } from "recoil"
import { listaRecomendadosState } from "../atom"

const useListaRecomendados = () => {
    return useRecoilValue(listaRecomendadosState)
}

export default useListaRecomendados;