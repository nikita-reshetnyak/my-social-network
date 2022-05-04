import { followUser, setUsers} from "./usersPage-reducer";
import  usersPageReducer from "./usersPage-reducer"

let state = {
   users: [
      {id:1,name:'Nikita',age: 25,followed:false},
      {id:2,name:'Sergey',age: 28,followed:false},
      {id:3,name:'Dima',age: 30,followed:true},
   ]
}
let requestUsers = [
   {id:1,name:'Nikita',age: 25,followed:false},
   {id:2,name:'Sergey',age: 28,followed:false},
   {id:3,name:'Dima',age: 30,followed:true},
]
it('users should be setted', ()=> {
   let action = setUsers(requestUsers)
   let usersState = usersPageReducer(state, action)
   expect(usersState.users.length).toBe(3)
});

it('property followed of selected user must be changed to true ', ()=> {
   let action = followUser(1)
   let usersState = usersPageReducer(state, action)
   expect(usersState.users[0].followed).toBe(true)
})
