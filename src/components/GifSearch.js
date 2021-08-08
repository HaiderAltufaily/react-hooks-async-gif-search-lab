import React, { useState } from "react";

function GifSearch({ onSubmitHandle }) {
  const [value, setValue] = useState("");

  function handleValue(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmitHandle(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label style={{ display: "block" }} htmlFor="">
          Enter Search Item
        </label>
        <input value={value} onChange={handleValue} type="text" name="" id="" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default GifSearch;
