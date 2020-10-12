import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

const Avatar = (props) => {

    const avatarListArray = [
        {
            id : 2,
            name : "Vijayender",
            work : "Developer"
        },
        {
            id : 1,
            name : "Krishaang",
            work : "Creater"
        },
        {
            id : 1,
            name : "Sarita",
            work : "Manager"
        },
        {
            id : 1,
            name : "WandererBucket",
            work : "Business"
        }
    ]

    const arrayAvatarCard = avatarListArray.map ( (avatarCard, i) => {
        return <AvatarList id={avatarListArray[i].id} 
        name={avatarListArray[i].name} 
        work={avatarListArray[i].work}  />
    })

    return( 
        <div className="avater-list tc">
        <h1>Welcome to Team Avatar</h1>         
             { arrayAvatarCard }
        </div>
        
        )   
}  

export default Avatar; 