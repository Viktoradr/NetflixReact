import { useRecoilValue } from "recoil"
import { listaComediaState } from "../atom"

const useListaComedia = () => {
    return useRecoilValue(listaComediaState)
}

export default useListaComedia;