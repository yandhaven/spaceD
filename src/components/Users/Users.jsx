import React from 'react'
import modules from '../Users/Users.module.css'
import * as axios from 'axios'
import { NavLink } from 'react-router-dom'

let Users = (props) => {



    let pagesCounter = Math.ceil(props.totalCount / props.pageSize)


    let pages = [];
    for (let i = 1; i <= pagesCounter; i++) {
        pages.push(i);
    }



    return <div>
        <div>
            {pages.map(p => {

                return <span className={props.pageNumber === p && modules.selectedPage} key={p} onClick={(e) => { props.setPage(p); }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => {
                return (
                    <div key={u.id}>

                        <span>
                            <span><NavLink to={'profile/' + u.id}><img src={u.avatar} className={modules.User_avatar} /></NavLink> </span>
                            <span>{u.followed ? <button onClick={() => { props.unfollowAction(u.id) }}>UNFOLLOW</button> : <button onClick={() => { props.followAction(u.id) }}>FOLLOW</button>}</span>
                        </span>

                        <span>
                            <span> |  {u.first_name}  /  </span>
                            <span>{u.last_name}   /    </span>
                        </span>
                        <span>
                            <span>{u.country} / </span>
                            <span>{u.city} |  </span>
                        </span>


                    </div>
                )
            })
        }

    </div>

}


export default Users;