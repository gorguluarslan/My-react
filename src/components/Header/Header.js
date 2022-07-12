import React from "react";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Search from "../../components/Search/Search";
import NotificationBar from "../../components/NotificationBar/NotificationBar";
import Profile from "../../components/Profile/Profile";
import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__top}>
        <HeaderTitle style={style} />
        <Search style={style} />
        <div className={style.user}>
          <NotificationBar style={style} />
          <Profile style={style} />
        </div>
      </div>
      <div className={style.header__bottom}>
        <Button style={style} />
        <Filter style={style} />
      </div>
    </div>
  );
};

export default Header;
