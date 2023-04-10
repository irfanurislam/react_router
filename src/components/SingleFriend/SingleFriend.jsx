import React from 'react';
import './SingleFriend.css'
import { Link } from 'react-router-dom';

const SingleFriend = (friend) => {
    //console.log(friend.friend)
    const {name,id,email} = friend.friend
    return (
        <div className='singledata'>
            <h2>id:{id}</h2>
            <h2>name:{name}</h2>
            <h2>email: {email}</h2>
            <p><Link to={`/friend/${id}`}>Show Me </Link></p>
        </div>
    );
};

export default SingleFriend;