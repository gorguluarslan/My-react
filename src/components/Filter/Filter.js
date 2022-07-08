import React from "react";
import SortDownButton from "../SortDownButton/SortDownButton";

const Filter = (props) => {
  const style = props.style;
  return (
    <div className={style.filter}>
      <div className={style.filter__left}>
        <span>1-All</span>
        <span>2-All</span>
        <span>3-All</span>
        <span>4-All</span>
        <span>5-All</span>
      </div>
      <div className={style.filter__right}>
        <span>6-Default</span>
        <SortDownButton />
      </div>
    </div>
  );
};

export default Filter;
