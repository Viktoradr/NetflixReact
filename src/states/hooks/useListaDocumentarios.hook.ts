import { useRecoilValue } from "recoil"
import { listaDocumentarioState } from "../atom"

const useListaDocumentarios = () => {
    return useRecoilValue(listaDocumentarioState)
}

export default useListaDocumentarios;