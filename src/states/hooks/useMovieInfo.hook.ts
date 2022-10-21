import { useRecoilValue } from "recoil"
import { getMovieInfoState } from "../atom"

const useMovieInfo = () => {
    return useRecoilValue(getMovieInfoState)
}

export default useMovieInfo;