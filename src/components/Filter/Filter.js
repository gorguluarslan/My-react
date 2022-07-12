import React from "react";
import { SortIcon } from "../../assets/icons/Icon";

const Filter = (props) => {
  const style = props.style;
  return (
    <div className={style.filter}>
      <div className={style.filter__left}>
        <span>All</span>
        <span>Inactive</span>
        <span>Active</span>
        <span>On Hold</span>
        <span>Completed</span>
      </div>
      <div className={style.filter__right}>
        <span>Default</span>
        <SortIcon fill={"#3C557A"} />
      </div>
    </div>
  );
};

export default Filter;
