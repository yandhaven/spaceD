import React from 'react';
import modules from './ProfileInfo.module.css'



const ProfileInfo = (props) => {

    if (props.userInfo === null) {
        return <div>FETCHING DATA</div>
    }


    return <div>
        <div>
            <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </div>
        <div className={modules.content}>
            <span>
                <div><img src={props.userInfo.avatar} /></div>
                <li>Name: {props.userInfo.first_name}</li>
                <li>Last name: {props.userInfo.last_name}</li>
                <li>From: {props.userInfo.country}<span>{props.userInfo.city}</span></li>
                <li>{props.userInfo.followed ? <button >FOLLOW</button> : <button>you already followed this person</button>}</li>

            </span>
            ava + description
    </div>

        


    </div>
}
export default ProfileInfo;