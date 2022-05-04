import React from "react";
import LoginForm from "./LoginForm";
import { reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {login} from "../../redux/auth-Reducer";
import { Redirect } from 'react-router'

const Login = (props) => {
   
   const LoginReduxForm =  reduxForm({
      form: 'login'
    })(LoginForm)

    const onSubmit =(formData)=>{
      props.login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    }
    
    if(props.isAuth) {
      return <Redirect to ={"/profile"}/>
    }
   return (
      
      <div>
         <div>
            Чтобы войти в аккаунт введите:
            <p><b>email:</b>nikitaresetnak0676@gmail.com</p>
            <p><b>password:</b>free</p>
         </div>
         <h1>Login</h1>
         <LoginReduxForm captcha={props.captcha}  onSubmit={onSubmit} />
      </div>
      
   )
}
let mapStateToProps =(state)=>{
   return {
      isAuth:state.auth.isAuth,
      captcha: state.auth.captcha
   }
}

export default connect(mapStateToProps,{login})(Login);