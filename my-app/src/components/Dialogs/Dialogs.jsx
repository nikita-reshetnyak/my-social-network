import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsForm from "./DialogsForm";
import { reduxForm } from "redux-form";




const Dialogs = (props) => {
   let dialogsElements = props.dialogsPage.dialogs.map((dialog, index) => <DialogItem key={index} id={dialog.id} name={dialog.name} />)
   let messagesElements = props.dialogsPage.messages.map((message, index) => <Message key={index} message={message.message} id={message.id} />)
   

   const addMessage = (value) => {
      props.addMessage(value.dialogsAddMessage)

   }
   const DialogsReduxForm = reduxForm({form:'dialogsAddMessageForm'})(DialogsForm)
  
   return (
      <div>
         <div className={s.dialogs}>

            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>

            <div className={s.messages}>
               {messagesElements}

            </div>
         </div>
         <div className={s.dialogsForm}>
            <h4 className={s.dialogsForm_title}>Add new Dialog</h4>
           < DialogsReduxForm onSubmit={addMessage}/>

         </div>
      </div>

   )
}
export default Dialogs;