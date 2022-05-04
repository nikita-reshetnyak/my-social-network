import profilePageReducer, { addPost,deletePost } from "./profilePage-reducer"

let state = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 11 },
      { id: 2, message: 'It\'s my first post', likesCount: 0 },
      { id: 3, message: 'I am very happy to use React!', likesCount: 34 },

   ],
}

it('post length should be incremented', () => {
   let action = addPost('nikita is good');
   let newState = profilePageReducer(state, action)
   expect(newState.posts.length).toBe(4);
});
it('message of post should be ', () => {
   let action = addPost('nikita is good');
   let newState = profilePageReducer(state, action)
   expect(newState.posts[3].message).toBe('nikita is good');
})

it('delete post',() => {
   const action = deletePost(3);
   let newState = profilePageReducer(state, action)
   expect(newState.posts[1].message).toBe('It\'s my first post');
})