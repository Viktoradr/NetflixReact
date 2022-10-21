import { CopyrightOutlined, Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Grid2 from '@mui/material/Unstable_Grid2';
import { Nav, Midias, LinkFooter, FooterCopyright } from "./styles";

function Footer() {

    const links = [
        'Audiodescrição',
        'Central de Ajuda',
        'Cartão pré-pago',
        'Imprensa',
        'Relações com investidores',
        'Carreiras',
        'Termo de Uso',
        'Privacidade',
        'Aviso legais',
        'Preferências de cookies',
        'Informações corporativas',
        'Entre em contato',
    ]

    return(
        <Nav>
            <Midias direction="row" spacing={4}>
                <Facebook fontSize="large"/>
                <Instagram fontSize="large" />
                <Twitter fontSize="large" />
                <YouTube fontSize="large" />
            </Midias>

            <Grid2 container>
                {links.map((item, index) => (
                    <Grid2  xs={12} sm={6} md={3} key={index} sx={{ marginBottom: 3 }}>
                        <LinkFooter href="/" underline="none">{item}</LinkFooter>
                    </Grid2>
                ))}
            </Grid2>
            
            <FooterCopyright>
                <CopyrightOutlined fontSize="small" /> 2021-2022 Project, Inc. Todos os direitos são resevardo a netflix.
            </FooterCopyright>
        </Nav>
    )
}

export default Footer;