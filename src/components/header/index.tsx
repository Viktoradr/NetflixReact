import { useEffect, useState } from "react";
import { Nav, Logo, Links, MenuSuspenso } from "./styles";
import { Avatar, Box, Divider, IconButton, Link, ListItemIcon, MenuItem, Tooltip } from "@mui/material";
import {  AccountBoxOutlined, LogoutOutlined, NotificationAddRounded, Person2Outlined, Search, SettingsOutlined, TranscribeOutlined } from "@mui/icons-material";

function Header() {

    const [background, setBackground] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBackground(true);
            }
            else {
                setBackground(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <Nav className={background ? 'black' : ''}>
            <Links direction="row" alignItems="center" spacing={4}>
                <Logo>
                    <a href="/">
                        <img src="images/logo.png" alt="logo" />
                    </a>
                </Logo>

                <Link href="/" underline="none" className="active">Início</Link>
                <Link href="/minha-lista" underline="none">Minha lista</Link>
            </Links>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginRight: 2 }}>
                <Search fontSize="large"  sx={{ marginRight: 3 }} />
                
                <NotificationAddRounded fontSize="large" sx={{ marginRight: 3 }} />

                <Tooltip title="">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <img src="images/avatar.png" alt="Usuário" height={35} />
                </IconButton>
                </Tooltip>
            </Box>

            <MenuSuspenso
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{elevation: 0}}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar sx={{ marginRight: 1 }} /> Perfil 1
                </MenuItem>
                <MenuItem>
                    <Avatar sx={{ marginRight: 1 }} /> Perfil 2
                </MenuItem>

                <Divider />

                <MenuItem>
                    <ListItemIcon>
                        <Person2Outlined fontSize="large" sx={{ marginRight: 1 }} />
                    </ListItemIcon>
                    Gerenciar Perfis
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <TranscribeOutlined fontSize="large" sx={{ marginRight: 1 }} />
                    </ListItemIcon>
                    Transferir Perfil
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AccountBoxOutlined fontSize="large" sx={{ marginRight: 1 }} />
                    </ListItemIcon>
                    Conta
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <SettingsOutlined fontSize="large" sx={{ marginRight: 1 }} />
                    </ListItemIcon>
                    Central de Ajuda
                </MenuItem>

                <Divider />

                <MenuItem>
                    <ListItemIcon>
                        <LogoutOutlined fontSize="small" />
                    </ListItemIcon>
                    Sair da Netflix
                </MenuItem>
            </MenuSuspenso>
        </Nav>
    )
}

export default Header;