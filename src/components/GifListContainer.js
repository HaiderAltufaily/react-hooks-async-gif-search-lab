import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifsData, setGifsData] = useState();
  const [searchValue, setSearchValue] = useState();
  useEffect(() => {
    fetch(
      `        https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=kGLTOkfYHGTl89EHVwpdf4fqpcAAeli8&rating=g`
    )
      .then((r) => r.json())
      .then((gifs) =>
        setGifsData(
          gifs.data
            .filter((arr, i) => i <= 2)
            .map((arr) => arr.images.original.url)
        )
      );

    return () => {};
  }, [searchValue]);

  console.log(searchValue);
  return (
    <div
      style={{
        display: "flex",

        justifyContent: "space-around",
      }}
    >
      <GifList gifsUrl={gifsData} />
      <GifSearch onSubmitHandle={setSearchValue} />
    </div>
  );
}

export default GifListContainer;
