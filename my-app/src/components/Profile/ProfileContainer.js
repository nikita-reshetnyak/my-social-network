import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { loadUserProfile, loadProfileStatus, updateProfileStatus,savePhoto,saveProfile } from '../../redux/profilePage-reducer'
import { withRouter } from 'react-router';
import { compose } from "redux";


class ProfileContainer extends React.Component {

   refreshProfile(){
   
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.loggedIn;
         if(!userId){
             this.props.history.push("/login")
         }
      }
      this.props.loadUserProfile(userId)
      this.props.loadProfileStatus(userId)
   };

   componentDidMount() {
  
     this.refreshProfile()
   };
   componentDidUpdate(prevProps, prevState){
      if( this.props.match.params.userId !== prevProps.match.params.userId){
         this.refreshProfile()
      }  
   };

   render() {
      
      return (
         <Profile 
         {...this.props} 
         status={this.props.status} 
         updateProfileStatus={this.props.updateProfileStatus}
         isOwner = {this.props.match.params.userId}
         savePhoto = {this.props.savePhoto}
         saveProfile ={this.props.saveProfile}
          />
      )
   }
}

let mapStateToProps = (state) => {
  
  return{
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   loggedIn:state.auth.userId
  } 
}


export default compose(
  
   withRouter,
   connect(mapStateToProps, { loadUserProfile, loadProfileStatus, updateProfileStatus, savePhoto,saveProfile })
)(ProfileContainer)