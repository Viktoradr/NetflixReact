import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const FeaturedMovie = styled.section`
  height: 100vh;

  @media (max-width: 760px) {
    height: 90vh;
  }
`;

export const BackdropVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const BackdropHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-top: 70px;
  padding-bottom: 150px;
`;

export const Name = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const Infos = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const Points = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 15px;
`;

export const Year = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const Seasons = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const Description = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
  @media (max-width: 760px) {
    max-width: 100%;
    font-size: 14px;
    margin-right: 30px;
  }
`;

export const Buttons = styled.div`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  opacity: 1;
  transition: all ease 0.2s;
  text-transform: capitalize;

  svg {
    margin-right: 5px;
  }
`;

export const WatchButton = styled(Button)`
  background-color: white;
  color: #000;
  margin-right: 10px;
  font-size: 20px;

  &:hover {
    background-color: rgba(255,255,255, .5);
    opacity: 0.7;
  }

@media (max-width: 760px) {
  font-size: 14px;
  padding: 5px 15px; 
}
`;

export const MyListButton = styled(Button)`
  background-color: rgba(	153, 153, 153, .4);
  color: white;
  font-size: 20px;

  &:hover {
    background-color: rgba(	153, 153, 153, .1);
  }

@media (max-width: 760px) {
  font-size: 14px;
  padding: 5px 15px; 
}
`;

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
