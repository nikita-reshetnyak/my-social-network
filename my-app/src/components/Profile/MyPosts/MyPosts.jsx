import React from "react";
import { reduxForm } from "redux-form";
import MyPost from "./MyPost/MyPost";
import MyPostForm from "./MyPostForm";
import s from './MyPosts.module.css';
import Divider from '@mui/material/Divider';



const ProfileReduxForm = reduxForm({ form: 'profileAddPostForm' })(MyPostForm)

const MyPosts = React.memo(props => {

   let onAddPost = (value) => {
      props.addPost(value.profileAddPost)
   };
   let postsElements = props.posts.map((post, index) => <MyPost profile={props.profile} key={index} id={post.id} message={post.message} likesCount={post.likesCount} />)
   return (
       <div className={s.postsWrapper}>
         <div className={s.postsForm}>
            <h4 className={s.postsForm_title}>Add new Post</h4>
            <ProfileReduxForm onSubmit={onAddPost} />

         </div>
         <Divider variant="middle" />
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
      


   )


});
export default MyPosts;