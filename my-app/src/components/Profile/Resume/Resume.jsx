import React, { useState } from "react";
import Preloader from "../../../commons/Preloader/Preloader";
import s from './Resume.module.css'
import userIcon from '../../../assets/images/user-icon.png'
import ResumeData from "./ResumeData";
import ResumeDataReduxForm from "./ResumeDataForm";



const Resume = ({ profile, isOwner, savePhoto, saveProfile }) => {
   const [editMode, setEditMode] = useState(false)
   if (!profile) {
      return <Preloader />
   }

   const onSubmit = (formData) => {
      saveProfile(formData).then(() => {
         setEditMode(false)
      })

   }
   const onSelectFile = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0])
      }

   }
   return (

      <div className={s.contentResume}>
         <div>
            <img src={profile.photos.large || userIcon} alt="" />
         </div>
         <div className={s.contentResume_inf}>Information :</div>
         {editMode ? <ResumeDataReduxForm onSelectFile={onSelectFile} isOwner={isOwner} profile={profile} initialValues={profile} onSubmit={onSubmit} /> : <ResumeData goToEditMode={() => setEditMode(true)} isOwner={isOwner} profile={profile} />}
      </div>


   )
}
export default Resume;

