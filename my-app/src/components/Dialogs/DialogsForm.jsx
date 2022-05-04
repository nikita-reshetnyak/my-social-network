import React from "react"
import {Field } from 'redux-form'
const DialogsForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
               <Field component="textarea" name="dialogsAddMessage" />
               <button type="submit">Add message</button>
            </form>
    )
}
export default DialogsForm;