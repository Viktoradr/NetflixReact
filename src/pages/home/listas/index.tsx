
import Homelist from "../../../data/homelist.json";
import Lista from "../../../components/lista";
import { Area } from "../../../interfaces/area.interface";
import useListaAcao from "../../../states/hooks/useListaAcao.hook";
import useListaComedia from "../../../states/hooks/useListaComedia.hook";
import useListaDocumentarios from "../../../states/hooks/useListaDocumentarios.hook";
import useListaEmAlta from "../../../states/hooks/useListaEmAlta.hook";
import useListaOriginais from "../../../states/hooks/useListaOriginais.hook";
import useListaRecomendados from "../../../states/hooks/useListaRecomendados.hook";
import useListaRomances from "../../../states/hooks/useListaRomances.hook";
import useListaTerror from "../../../states/hooks/useListaTerror.hook";
import { Lists } from "./styles";

function Areas() {

    const homelist = Homelist as Area[];

    homelist.filter(x => x.slug === 'originals')[0].items = useListaOriginais();
    homelist.filter(x => x.slug === 'trending')[0].items = useListaRecomendados();
    homelist.filter(x => x.slug === 'toprated')[0].items = useListaEmAlta();
    homelist.filter(x => x.slug === 'action')[0].items = useListaAcao();
    homelist.filter(x => x.slug === 'comedy')[0].items = useListaComedia();
    homelist.filter(x => x.slug === 'terror')[0].items = useListaTerror();
    homelist.filter(x => x.slug === 'romance')[0].items = useListaRomances();
    homelist.filter(x => x.slug === 'documentary')[0].items = useListaDocumentarios();
  
    return (
        <Lists>
            {homelist.map((item, key) => (
                <Lista key={key} {...item}/> 
            ))}
        </Lists>
    )
}

export default Areas;