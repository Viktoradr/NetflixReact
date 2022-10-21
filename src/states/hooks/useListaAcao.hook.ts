import { useRecoilValue } from "recoil"
import { listaAcaoState } from "../atom"

const useListaAcao = () => {
    return useRecoilValue(listaAcaoState)
}

export default useListaAcao;