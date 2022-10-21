import { useRecoilValue } from "recoil"
import { listaTerrorState } from "../atom"

const useListaTerror = () => {
    return useRecoilValue(listaTerrorState)
}

export default useListaTerror;