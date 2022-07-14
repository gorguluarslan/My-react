import React from "react";
import {
  MessageIcon,
  NotificationIcon,
  NotificationIconRed,
  SettingsIcon,
} from "../../assets/icons/Icon";

const NotificationBar = ({ style }) => {
  return (
    <div className={style.notification}>
      <MessageIcon fill="#8B8B8B" />
      <NotificationIconRed fill="#8B8B8B" />
      <SettingsIcon fill="#8B8B8B" />
    </div>
  );
};

export default NotificationBar;
