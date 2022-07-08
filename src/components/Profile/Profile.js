import React from "react";

const Profile = () => {
  return (
    <div className="profile__wrapper">
      <div className="wrapper__left">
        <span>image</span>
      </div>
      <div className="wrapper__right">
        <span>Name Surname</span>
        <a href="mailto:mailaddress@gmail.com">Mail</a>
      </div>
    </div>
  );
};

export default Profile;
