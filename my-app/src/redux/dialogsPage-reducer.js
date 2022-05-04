const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {

   dialogs: [
      { id: 1, name: 'Nikita' },
      { id: 2, name: 'Sergey' },
      { id: 3, name: 'Nikolay' },
      { id: 4, name: 'Dania' },
      { id: 5, name: 'Artem' }
   ],
   messages: [
      { id: 1, message: 'First Massage' },
      { id: 2, message: 'Second Massage' },
      { id: 3, message: 'Third Massage' }

   ],
  

}
const dialogsPageReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 5,
            message: action.newMessageText
         }
         return {
            ...state,
            messages: [...state.messages, newMessage],
          
         }
      default:
         return state
   }
}
export default dialogsPageReducer;

export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE,newMessageText });
