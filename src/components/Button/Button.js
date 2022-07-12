import React from "react";

const Button = ({ style }) => {
  return (
    <div className={style.button}>
      <button type="submit">
        <span>+ </span>
        <span>New</span>
      </button>
    </div>
  );
};

export default Button;
