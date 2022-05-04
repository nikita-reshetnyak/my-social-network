import React from "react";
import s from './Users.module.css'
import userIcon from '../../assets/images/user-icon.png'
import { NavLink } from 'react-router-dom'




const User = ({user, followingInProgress, ...props }) => {
 
    return (
        <div>

            <div className={s.userItem__wrapper}>

                <div className={s.userItem__left}>
                    <NavLink to={'/profile/' + user.id} >
                        <img className={s.avatar} alt='' src={user.photos.small != null ? user.photos.small : userIcon} />
                    </NavLink>
                    {

                        user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} className={s.userItem__button} onClick={() => {
                            props.unfollowSuccess(user.id)
                        }
                        }>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} className={s.userItem__button} onClick={() => {
                                props.followSuccess(user.id)

                            }
                    } >Follow</button>}

                </div>
                <div className={s.userItem__right}>
                    <div className={s.about}>
                        <p className={s.userItem__name}>{user.name}</p>
                        <p>{user.status}</p>
                    </div>
                    <div className={s.location}>

                        <p>"user.location.country"</p>
                        <p>"user.location.city"</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default User;