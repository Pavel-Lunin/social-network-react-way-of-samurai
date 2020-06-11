import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  if (!props.isAuth) return <Redirect to="/login" />;
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsConteiner />
    </div>
  );
};

export default Profile;
