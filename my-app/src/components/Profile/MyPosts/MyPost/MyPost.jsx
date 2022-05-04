import React from "react";
import s from './MyPost.module.css';
import userIcon from '../../../../assets/images/user-icon.png';
import Preloader from "../../../../commons/Preloader/Preloader";

const MyPost = ({ message, likesCount, profile }) => {
   if (!profile) {
      return <Preloader />
   }
   return (
      <div className={s.posts__item}>
         <div className={s.user}>
            {profile.photos.small ? <img src={profile.photos.small} alt="" /> : <img className={s.userIcon} src={userIcon} alt="" />}


         </div>
         <p>{message}</p>
         <p>likes {likesCount}</p>
      </div>

   )
}
export default MyPost;