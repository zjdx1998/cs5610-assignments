import React from "react";
import { useSelector } from "react-redux";
import EditProfileView from "./EditProfileView";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);

  return <EditProfileView key={profile._id} profile={profile[0]} />;
};

export default EditProfile;
