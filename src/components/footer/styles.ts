import styled from "@emotion/styled";
import { Container, Link, Stack } from "@mui/material";

export const Nav = styled(Container)`
  padding-top: 100px;
  padding-bottom: 100px;
  color: #999;
`;

export const Midias = styled(Stack)`
    color: white;
    margin-bottom: 30px;
`;

export const LinkFooter = styled(Link)`
  color: #999;
  font-size: 18px;
  font-weight: lighter;
`;

export const FooterCopyright = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;

    svg {
        margin-right: 5px;
    }
`;
