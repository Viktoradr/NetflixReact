import styled from "@emotion/styled";
import { Menu, Stack } from "@mui/material";

export const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;

  &.black {
    background-color: #141414;
  }
`;

export const Links = styled(Stack)`
  a {
    color: whitesmoke;
    font-size: 18px;
    transition: all ease 0.2s;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }

    &.active {
      color: white;
      font-weight: bold;
    }
  }
`;

export const Logo = styled.div`
  height: 30px;
  margin-right: 50px;

  img {
    height: 100%;
  }
`;

export const MenuSuspenso = styled(Menu)`
    overflow: visible;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32));
    margin-top: 1.5px;

    svg {
        color: rgba(255, 255, 255, 0.7);
    }

    .MuiMenu-paper {
        background-color: rgba(0, 0, 0, .7)!important;
        color: white !important;
        width: 250px;
    }

    .MuiDivider-root {
        background-color: rgba(255, 255, 255, 0.7);
        height: 0.2px !important;
    }

    &.MuiAvatar-root {
        width: 32px;
        height: 32px;
        margin-left: -0.5px;
        margin-right: 1px;
    }

    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 14;
        width: 10px;
        height: 10px;
        /* background-color: background.paper; */
        transform: translateY(-50%) rotate(45deg);
        z-index: 0;
    }
`;
