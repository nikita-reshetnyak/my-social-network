import { connect } from "react-redux"
import React from "react"
import { setCurrentPage, requestUsers, followSuccess, unfollowSuccess, } from "../../redux/usersPage-reducer"
import Users from "./Users"
import Preloader from '../../commons/Preloader/Preloader'
import { compose } from "redux"
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersPage, getUsers } from "../../redux/users-selectors"


class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
   }
   onPageChange = (pageNumber) => {
    
      this.props.requestUsers(pageNumber, this.props.pageSize)
   }

   render() {
     
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            onPageChange={this.onPageChange}
            followSuccess={this.props.followSuccess}
            unfollowSuccess={this.props.unfollowSuccess}
            totalUsersPages={this.props.totalUsersPages}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            followingInProgress={this.props.followingInProgress}

         />
      </>


   }
}


let mapStateToProps = (state) => {
 
   return {
      users:getUsers(state),
      pageSize: getPageSize(state),
      totalUsersPages:getTotalUsersPage(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}
export default compose(
 
   connect(mapStateToProps, {
      setCurrentPage,
      requestUsers,
      followSuccess,
      unfollowSuccess,

   })

)(UsersContainer)


