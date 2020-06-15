import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/*<div>
        <img src="https://99px.ru/sstorage/53/2014/02/tmb_94332_2346.jpg" />
      </div>*/}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
