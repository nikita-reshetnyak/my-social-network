import * as axios from 'axios'
let instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '77786374-c46e-46eb-bb94-2561699c9161'
   }

})
export const usersApi = {

   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   unfollowRequestedUser(userId) {
      return instance.delete(`follow/${userId}`)
   },
   followRequestedUser(userId) {
      return instance.post(`follow/${userId}`)
   },
  
}
export const profileApi = {
   getUserProfile(userId) {
      return instance.get('profile/' + userId)
   },
   getProfileStatus(userId) {
      return instance.get('profile/status/' + userId)
   },
   updateProfileStatus(status) {
      return instance.put('profile/status/', {
         status: status
      })
   },
   savePhoto(photo){
      const formData = new FormData();
      formData.append('image', photo);
      return  instance.put('profile/photo',formData,{
         "Content-Type":"multipart/form-data"
      })
   },
   saveProfile(profile){
      return instance.put('profile/', profile)
   }
   

}
export const authApi={
   getAuthUser() {
      return instance.get(`auth/me`)
   },
   login(email,password,rememberMe,captcha = null){
      return instance.post(`auth/login`,{email,password,rememberMe,captcha})
   },
   logout(){
      return instance.delete(`auth/login`)
   }

}

export const securityApi= {
   captchaUrl(){
      return instance.get(`security/get-captcha-url`)
   }

}
