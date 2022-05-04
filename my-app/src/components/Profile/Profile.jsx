import React from "react";
import Resume from "./Resume/Resume";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus"




const Profile = ({ profile, isOwner, status, updateProfileStatus, savePhoto, saveProfile }) => {
   return (
      <div className="content">

         <Resume saveProfile={saveProfile} savePhoto={savePhoto} isOwner={isOwner} profile={profile} />
         < ProfileStatus status={status} updateProfileStatus={updateProfileStatus} />
         <MyPostsContainer />
      </div>
   )
}
export default Profile;