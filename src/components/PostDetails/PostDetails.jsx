import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const {id,title,body,userid} = post

    const navigate = useNavigate()
    const handleclick = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>post details show of {id}</h2>
            <h5>{title}</h5>
            <h5>{body}</h5>
            <button onClick={handleclick}>go back</button>
        </div>
    );
};

export default PostDetails;