import { useEffect } from "react";import useMovieAction from "../../states/actions/useMovie.action";
import Destaque from "./destaque";
import Areas from "./listas";

function HomePage() {
  const actions = useMovieAction();

  useEffect(() => {
    actions.getOriginais();
    actions.getRecomendados();
    actions.getEmAlta();
    actions.getAcao();
    actions.getComedia();
    actions.getTerror();
    actions.getRomance();
    actions.getDocumentarios();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <Destaque />
      <Areas />
    </main>
  );
}

export default HomePage;
