import { ArrowBack } from "@mui/icons-material";
import { Container, Link, Typography } from "@mui/material";

function NotFoundPage() {
    return(
        <Container sx={{
            top: 70,
            padding: '300px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography sx={{ 
                fontSize: 30, 
                color: 'white', 
                textShadow: '2px 2px 5px rgba(0,0,0,0.4)' 
            }}>Página Não Encontrada</Typography>
            <Typography sx={{ 
                fontSize: 100, 
                color: 'red', 
                textShadow: '2px 2px 5px #000000' 
            }}>404</Typography>
            <Link href="/" sx={{ 
                textDecoration: 'none', 
                color: 'white',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center' 
            }}> <ArrowBack fontSize="large"/> Voltar para home</Link>
        </Container>
    )
}

export default NotFoundPage;