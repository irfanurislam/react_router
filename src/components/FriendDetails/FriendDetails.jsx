import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const frienddetails = useLoaderData()
    console.log(frienddetails)
    return (
        <div>
            <h3>id: {frienddetails.id} </h3>
            <h3> {frienddetails.name} </h3>
            <h3> {frienddetails.email} </h3>
        </div>
    );
};

export default FriendDetails;