import { useRecoilValue } from "recoil"
import { listaRomanceState } from "../atom"

const useListaRomances = () => {
    return useRecoilValue(listaRomanceState)
}

export default useListaRomances;