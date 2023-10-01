import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Blogpost from './components/blogpost/Blogpost';
import Contact from './components/contact/Contact';
import Error from './components/Error/Error';
import Home from './components/home/Home';
import Homepage from './components/homepage/Homepage';
import UserDetails from './components/users/user/userDetails/userDetails';
import Users from './components/users/Users';
import './index.css';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Homepage/>,
      },
      {
        path: '/blog',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Blog/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/users',
        element: <Users/>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/user/:id',
        element: <UserDetails/>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path:'/post/:id',
        element: <Blogpost/>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
