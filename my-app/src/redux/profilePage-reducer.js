import { profileApi } from '../api/api';
import { stopSubmit } from 'redux-form';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {

   posts: [ ],
   profile: null,
   status: ""


}
const profilePageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            posts: [...state.posts, newPost],

         };


      case SET_USER_PROFILE:
         return { ...state, profile: action.usersData };
      case SET_STATUS:
         return { ...state, status: action.status };
      case DELETE_POST:
         return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
      case SAVE_PHOTO_SUCCESS: 
      return {...state, profile: {...state.profile,photos:action.photo}}

      default:
         return state
   }
}
export default profilePageReducer;

//todo ActionCreators
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUsersProfile = (usersData) => ({ type: SET_USER_PROFILE, usersData })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo })

//todo ThunkCreators
export const loadUserProfile = (userId) => {
   return async (dispatch) => {
      let response = await profileApi.getUserProfile(userId)
      dispatch(setUsersProfile(response.data))
   }
}
export const loadProfileStatus = (userId) => {
   return async (dispatch) => {
      let response = await profileApi.getProfileStatus(userId)
      dispatch(setStatus(response.data))
   }
}
export const updateProfileStatus = (status) => {
   return async (dispatch) => {
      let response = await profileApi.updateProfileStatus(status)
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status))
      }

   }
}
export const savePhoto = (file) => {
   return async (dispatch) => {
      let response = await profileApi.savePhoto(file)
      if (response.data.resultCode === 0) {
         dispatch(savePhotoSuccess(response.data.data.photos))
      }

   }
}
export const saveProfile = (profile) => {
   return async (dispatch,getState) => {
      let userId = getState().auth.userId;
      let response = await profileApi.saveProfile(profile)
      if (response.data.resultCode === 0) {
          dispatch(loadUserProfile(userId))
      }else{
            dispatch(stopSubmit('edit-Profile',{_error: response.data.messages[0]}))
            return Promise.reject( response.data.messages[0])
      }
    
   }
}