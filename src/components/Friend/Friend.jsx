import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friend = () => {
    const data = useLoaderData()
    //console.log(data)
    return (
        <div>
            <h3>these are friends data {data.length}</h3>
            <div>
                {
                    data.map(friend =><SingleFriend
                    key = {friend.id}
                    friend ={friend}
                    ></SingleFriend>)
                }
            </div>
        </div>
    );
};

export default Friend;