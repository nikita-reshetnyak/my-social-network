import React from "react";
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from "../../../commons/FormControl/FormControl";
import styles from "../../../commons/FormControl/FormControl.module.css"

const ResumeDataForm = ({ handleSubmit,isOwner, error, profile,onSelectFile }) => {
    return (
        <div>
            {!isOwner && <input type={"file"} onChange={onSelectFile} />}
            <form onSubmit={handleSubmit}>
                <div>
                    {error && <div className={styles.errorMessage}>{error}</div>}

                </div>
                <button>Save</button>
                <div>
                    <div>
                        <b>Fullname:</b>
                        {createField("Fullname", "fullName", Input, [])}
                    </div>
                    <div>
                        <b>lookingForAJob:</b>
                        {createField(null, "lookingForAJob", Input, [], { type: "checkbox" })}
                    </div>
                    <div>
                        <b>Professional Skills: </b>
                        {createField("Professional Skills", "lookingForAJobDescription", Textarea, [])}
                    </div>
                    <div>
                        <b>About me: </b>
                        {createField("About me", "aboutMe", Textarea, [])}
                    </div>
                </div>
                <div>
                    <b>Contacts:</b>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}:</b>
                            {createField(key, "contacts." + key, Input, [])}
                        </div>
                    })}
                </div>



            </form>
        </div>



    )
}
const ResumeDataReduxForm = reduxForm({ form: 'edit-Profile' })(ResumeDataForm)
export default ResumeDataReduxForm;

