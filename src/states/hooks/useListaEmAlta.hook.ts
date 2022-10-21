import { useRecoilValue } from "recoil"
import { listaEmAltaState } from "../atom"

const useListaEmAlta = () => {
    return useRecoilValue(listaEmAltaState)
}

export default useListaEmAlta;