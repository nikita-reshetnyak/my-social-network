import { stopSubmit } from 'redux-form';
import { authApi,securityApi } from '../api/api'
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS';


let initialState = {
   userId: null,
   login: null,
   email: null,
   isAuth: false,
   isFetching: false,
   captcha:null

}
const authReducer = (state = initialState, action) => {
   switch (action.type) {

      case SET_USER_DATA:
      case GET_CAPTCHA_SUCCESS:
     
         return { ...state, ...action.payload}
      default:
         return state
   }
}
export default authReducer;

//todo ActionCreators
export const setAuthUserData = (userId, login, email,isAuth) => ({ type: SET_USER_DATA, payload: { userId, login, email,isAuth } });
export const getCaptchaUrl= (captcha) => ({ type: GET_CAPTCHA_SUCCESS, payload:{ captcha} });

//todo ThunkCreators
export const loadAuthUser = () => {
   return async (dispatch) => {
      let response = await authApi.getAuthUser()
      if (response.data.resultCode === 0) {
       let { id, login, email } = response.data.data;
       dispatch(setAuthUserData(id, login, email,true))
    }
      return response;
   }
  

}
export const login = (email,password,rememberMe,captcha) =>{
 
   return async (dispatch)=>{
      let response = await authApi.login(email,password,rememberMe,captcha)
      
         if(response.data.resultCode === 0){
           
         dispatch(loadAuthUser())
         } else {
            if(response.data.resultCode === 10){
               dispatch(getCaptchaSuccess())
            }
            let errorMessage = response.data.messages.length > 0 ? response.data.messages[0]:"Some Error";
            dispatch(stopSubmit("login",{_error:errorMessage}))
         }
     
   }
}
export const getCaptchaSuccess = () =>{
   return async (dispatch) =>{
      const response = await securityApi.captchaUrl();
      const captcha = response.data.url;
      dispatch(getCaptchaUrl(captcha))
   }
}
export const logout = () =>{
   return async (dispatch)=>{
      let response = await authApi.logout()
      if(response.data.resultCode === 0){
         dispatch(setAuthUserData(null,null,null,false))
      }
   }
}