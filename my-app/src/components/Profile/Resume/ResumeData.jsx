import React from "react";
import Contacts from "./Contacts";
import s from './Resume.module.css'
const ResumeData = ({ profile, goToEditMode, isOwner }) => {

 
    return (
        <div className={s.content_resume_info}>
            {!isOwner && <button onClick={goToEditMode}>Edit</button>}
            <div>
                <div>
                    <b>Fullname:</b>  {profile.fullName}
                </div>
                <div>
                    <b>lookingForAJob:</b>
                    {profile.lookingForAJob ? "yes": "no"}
                </div>
                <div>
                    <b>Professional Skills: </b> {profile.lookingForAJobDescription}
                </div>
                <div>
                    <b>About me:</b>  {profile.aboutMe}
                </div>
            </div>
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(keys => {
               return  <Contacts
                        key={keys}
                        contactsKey={keys}
                        contactsValue ={profile.contacts[keys]}
                        
                />
           })}
            </div>
           

        </div>


    )
}
export default ResumeData;



