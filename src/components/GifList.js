import React from "react";
import { v4 as uuid } from "uuid";

function GifList({ gifsUrl }) {
  return (
    <div>
      <ul>
        {gifsUrl?.map((url) => (
          <li key={Math.random(100) * 100}>
            {" "}
            <img style={{ width: "" }} src={url} alt="" />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GifList;
