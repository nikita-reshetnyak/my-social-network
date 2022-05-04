import React,{useEffect, useState} from 'react';
import s from './Profile.module.css'

const ProfileStatus = (props) => {

   const [editMode, setEditMode] = useState(false);
   const [status,setStatus] = useState(props.status)
   

   useEffect(() => {
      setStatus(props.status)
   },[props.status])

   let activateEditMode = () => {
      setEditMode(true)
   }
  
   let onChangeStatus = (e) => {
      setStatus(e.currentTarget.value)
   }
   let deActivateEditMode = () => {
      setEditMode(false);
      props.updateProfileStatus(status)
   }
  
      return (
         <div  >
            <div className={s.profileStatusSubtext}> Status :</div>
            <div >
               {!editMode &&
                  <span onClick={activateEditMode}>{props.status || '---------'}</span>
               }

            </div>
            <div  >
               {editMode &&
                  <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode} value={status} type="text" />
               }

            </div>
         </div>
      )
   
}
export default ProfileStatus;