import { CircularProgress } from "@mui/material";
import { LoadingWrapper } from "./styles";

function Loading() {
    return (
        <LoadingWrapper>
          <CircularProgress color="error" />
        </LoadingWrapper>
    )
}

export default Loading;