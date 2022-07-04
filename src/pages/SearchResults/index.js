import React, { useEffect, useRef, useCallback } from "react";
import Spinner from "components/Spinner";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import useSeo from "hooks/useSeo";

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const visorRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: !loading && visorRef,
    once: false,
    distance: "600px",
  });

  const title = gifs
    ? `${gifs.length} results of ${keyword}`
    : loading
    ? "Cargando..."
    : "";
  useSeo({ title });

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
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div data-testid="visor" ref={visorRef} />
        </>
      )}
    </>
  );
}
