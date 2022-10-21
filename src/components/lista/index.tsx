import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useState } from "react";
import { Area } from "../../interfaces/area.interface";
import Loading from "../loading";
import Item from "./item";
import { MovieRow, MovieRowTitle, MovieRowListArea, MovieRowList, MoverowLeft, MoverowRight } from "./styles";

function Lista({ title, items }: Area) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 6);
    if (x > 400) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 6);
    let listW = items.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <MovieRow>
      {items.length <= 0 ? <Loading /> : <>
        <MovieRowTitle>{title}</MovieRowTitle>
        <MovieRowListArea>
          <MoverowLeft className="moverow__left" onClick={handleLeftArrow}>
            <NavigateBefore style={{ fontSize: 50 }}/>
          </MoverowLeft>

          <MoverowRight className="moverow__right" onClick={handleRightArrow}>
            <NavigateNext style={{ fontSize: 50 }}/>
          </MoverowRight>

          <MovieRowList style={{
            marginLeft: scrollX,
            width: items.length * 150
          }}>
            {items.length > 0 &&
              items.map((item, key) => <Item movie={item} key={item.id} />)}
          </MovieRowList>
        </MovieRowListArea>
      </>}

      
    </MovieRow>
  );
}

export default Lista;
