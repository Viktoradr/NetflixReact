import styled from "@emotion/styled";

export const MovieRow = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const MovieRowTitle = styled.h2`
  margin: 0px 0px 0px 40px;
`;

export const MovieRowListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;

  &:hover .moverow__right,
  &:hover .moverow__left {
    opacity: 1;
  }
`;

export const MovieRowList = styled.div`
  width: 99999999px;
  transition: all ease 0.5s;
`;

const Moverow = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;

  @media (max-width: 760px) {
    opacity: 1;
    overflow-y: hidden;
    overflow-x: auto;
  }
`;

export const MoverowLeft = styled(Moverow)`
  left: 0;
`;

export const MoverowRight = styled(Moverow)`
  right: 0;
`;
