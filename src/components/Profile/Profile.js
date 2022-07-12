import React from "react";
import profile from "../../assets/image/profile.png";

const Profile = ({ style }) => {
  return (
    <div className={style.profile}>
      <div className={style.profile__left}>
        <img src={profile} alt={"picture"} />
      </div>
      <div className={style.profile__right}>
        <span>Hilal {"&"} Güney</span>
        <a href="mailto:asfakmahmudbd@gmail.com">asfakmahmudbd@gmail.com</a>
      </div>
    </div>
  );
};

export default Profile;
