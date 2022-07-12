import React from "react";
import {
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
} from "../../assets/icons/Icon";

const NotificationBar = ({ style }) => {
  return (
    <div className={style.notification}>
      <MessageIcon fill="#8B8B8B" />
      <NotificationIcon fill="#8B8B8B" />
      <SettingsIcon fill="#8B8B8B" />
    </div>
  );
};

export default NotificationBar;
