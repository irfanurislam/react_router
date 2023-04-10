import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import First from './components/First/First';
import Friend from './components/Friend/Friend';
import SingleFriend from './components/SingleFriend/SingleFriend';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

const router = createBrowserRouter([
  // {
  //   path:'/',
  //   element: <App></App>
  // },
  
  {
    path:'/',
    element: <Home></Home>,
    children:[

      {
        path:'/',
        element: <First></First>
      },
      {
        path:'about',
        element: <About></About>
      },
      {
        path:'friend/:friendId',
        element: <FriendDetails></FriendDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'friend',
        element: <Friend></Friend>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts')


      },
      {
        path:'post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)


      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
      {
        path:'*',
        element: <h3>404 data not found</h3>

      }
    ]
  }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
