import React from "react";
import Paginator from "../../commons/Paginator/Paginator";
import User from "./User";



const Users = ({ totalUsersPages, pageSize, onPageChange, currentPage, users, followingInProgress, ...props }) => {

   return (
      <div>
         <Paginator totalItemsPage={totalUsersPages} pageSize={pageSize} onPageChange={onPageChange} currentPage={currentPage} />
         {
            users.map(u => {
               return <User
                  key={u.id}
                  user={u}
                  followingInProgress={followingInProgress}
                  unfollowSuccess={props.unfollowSuccess}
                  followSuccess={props.followSuccess}
                
                   />

            })
         }
      </div >
   )
}
export default Users;