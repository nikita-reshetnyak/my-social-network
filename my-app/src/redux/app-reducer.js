
import { loadAuthUser } from './auth-Reducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
  initialized:false

}
const appReducer = (state = initialState, action) => {
   switch (action.type) {

      case INITIALIZED_SUCCESS:
         return { ...state, initialized:true}

      default:
         return state
   }
}
export default appReducer;

//todo ActionCreators
export const setInitializing = () => ({ type: INITIALIZED_SUCCESS });

//todo ThunkCreators
export const initializeApp = () => async (dispatch)=> {
     let promise = dispatch(loadAuthUser())
       await Promise.all([promise])
       dispatch(setInitializing())
   
}
