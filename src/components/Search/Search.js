import React from "react";
import { SearchIcon } from "../../assets/icons/Icon";

const Search = (props) => {
  const style = props.style;
  return (
    <div className={style.search}>
      <input type={"text"} placeholder={"Search..."} />
      <SearchIcon fill="#8B8B8B" />
    </div>
  );
};

export default Search;
