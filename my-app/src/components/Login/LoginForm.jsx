import React from "react";
import { createField, Input } from "../../commons/FormControl/FormControl";
import {required,maxLengthCreator} from "../../utilies/validator/validator"
import styles from "../../commons/FormControl/FormControl.module.css"

let maxLength10 = maxLengthCreator(30);
const LoginForm =({handleSubmit,error, captcha}) =>{

    return (
        <form onSubmit={handleSubmit}>
            {createField("Login","email",Input,[required,maxLength10])}
            {createField("Password","password",Input,[required,maxLength10],{type:"password"})}
            {createField(null,"rememberMe",Input,[],{type:"checkbox"},"Remember Me")}
            {captcha && <img src={captcha} alt ="" />}
            {captcha && createField("Enter words from image","captcha",Input,[required])}
            <div className={styles.errorMessage} >{error}</div>
            <div>
               <button type="submit">Login</button>
            </div>

        </form>
    )
}
export default LoginForm;