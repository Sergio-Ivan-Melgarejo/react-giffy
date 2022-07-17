import Spinner from "components/Spinner";
import Nathing from "components/__subComponents/nathing";
import React from "react";
import Gif from "../Gif";
import { Styles } from "./Styled";

export default function ListOfGifs({ gifs, home }) {
  return (
    <Styles>
      {gifs.length <= 0 ? (
        home ? <Spinner /> : <Nathing />
      ) : (
        gifs.map(({ id, title, url }) => (
          <Gif id={id} key={id} title={title} url={url} />
        ))
      )}
    </Styles>
  );
}
