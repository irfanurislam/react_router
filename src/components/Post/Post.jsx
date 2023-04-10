import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    console.log(post)
    const {id,title} = post;
    
    const navigate = useNavigate()

    const handlerclick = () =>{
         navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>user {id}</h2>
            <h2>name {title}</h2>
            <Link to={`/post/${id}`}>Show details</Link>
            <Link to={`/post/${id}`}><button>show post details</button></Link>
            <button onClick={handlerclick}>handler option user</button>
        </div>
    );
};

export default Post;