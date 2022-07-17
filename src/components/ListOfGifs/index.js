import Nathing from "components/__subComponents/nathing";
import React from "react";
import Gif from "../Gif";
import { Styles } from "./Styled";

export default function ListOfGifs({ gifs }) {
  return (
    <Styles>
      {gifs.length <= 0 ? (
        <Nathing />
      ) : (
        gifs.map(({ id, title, url }) => (
          <Gif id={id} key={id} title={title} url={url} />
        ))
      )}
    </Styles>
  );
}
