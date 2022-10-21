import { useRecoilValue } from "recoil"
import { listaOriginaisState } from "../atom"

const useListaOriginais = () => {
    return useRecoilValue(listaOriginaisState)
}

export default useListaOriginais;