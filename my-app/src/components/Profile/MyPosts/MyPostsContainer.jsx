
import { connect } from "react-redux";
import { addPost, } from "../../../redux/profilePage-reducer";
import { getProfile } from "../../../redux/profilePage-selectors";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: getProfile(state)
   }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, })(MyPosts);
export default MyPostsContainer;