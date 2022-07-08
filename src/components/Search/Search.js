import React from "react";

const Search = (props) => {
  const style = props.style;
  return (
    <div className={style.search}>
      <input type={"text"} />
    </div>
  );
};

export default Search;
