import React from "react";

const HeaderTitle = (props) => {
  const style = props.style;
  return (
    <div className={style.title}>
      <span>Project</span>
    </div>
  );
};

export default HeaderTitle;
