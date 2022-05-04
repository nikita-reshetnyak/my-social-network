import { usersApi } from '../api/api'
import { updateObjectInArray } from '../utilies/object-helpers';

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';


let initialState = {
   users: [],
   pageSize: 10,
   totalUsersPages: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
   
  

}
const usersPageReducer = (state = initialState, action) => {
   switch (action.type) {
     
      case FOLLOW_USER:
         return {
            ...state,
            users: updateObjectInArray(state.users,"id",action.userId,{followed:true})
         }
      case UNFOLLOW_USER:
         return {
            ...state,
            users: updateObjectInArray(state.users,"id",action.userId,{followed:false})
         }
      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.pageNumber
         }
      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersPages: action.count }
      case TOGGLE_ISFETCHING:
         return { ...state, isFetching: action.isFetching }
      case TOGGLE_FOLLOWING_IN_PROGRESS:
         return {
            ...state,
            followingInProgress:
               action.isFetching ? [...state.followingInProgress, action.userId]
                  : state.followingInProgress.filter(id => id !== action.userId)
         }
      default:
         return state
   }
}
export default usersPageReducer;

//todo ActionCreators
export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, isFetching })
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId })

//todo ThunkCreators
export const requestUsers = (currentPage, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true))
      let data = await usersApi.getUsers(currentPage, pageSize)
         dispatch(toggleIsFetching(false))
         dispatch(setCurrentPage(currentPage))
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
   }
}
const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
   dispatch(toggleFollowingInProgress(true, userId))
   let response = await apiMethod(userId)
   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId))
   }
   dispatch(toggleFollowingInProgress(false, userId))
         
}

export const unfollowSuccess = (userId) => {
   return async (dispatch)=>{
      followUnfollowFlow(dispatch,userId,usersApi.unfollowRequestedUser.bind(usersApi),unfollowUser)
   }
   
}
export const followSuccess = (userId) => { 
   return async (dispatch) => {
      followUnfollowFlow(dispatch,userId,usersApi.followRequestedUser.bind(usersApi),followUser)
   }
  
}