import React, { useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import debounce from "just-debounce-it";

// Hooks
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";

// components
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";

export default function SearchResults() {
  const { keyword, rating } = useParams();
  const { loading, gifs, setPage } = useGifs({ keyword, rating});
  const visorRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && visorRef,
    once: false,
    distance: "600px",
  });

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    []
  );

  useEffect(function () {
    if (isNearScreen) debounceNextPage();
  });

  return (
    <>
      {loading ? (
        <>
          <Helmet >
            <title>Cargando...</title>
            <meta name="description" content={"Cargando..."} />
            <meta name="rating" content="General" />
          </Helmet>
          <Spinner />
        </>
      ) : (
        <>
          <Helmet >
            <title>Search | Giffy</title>
            <meta name="description" content={`${gifs.length} results of ${keyword}`} />
            <meta name="rating" content="General" />
          </Helmet>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div data-testid="visor" ref={visorRef} />
        </>
      )}
    </>
  );
}
