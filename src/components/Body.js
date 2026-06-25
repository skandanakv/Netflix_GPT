import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {React, useEffect} from 'react'
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'; 
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

    const dispatch=useDispatch(); //always mention hooks at the top, just aft comp declaration


    const appRouter = createBrowserRouter([
        { 
            path: "/", 
            element: <Login />
    }, 
    {
        path: "/browse",
        element: <Browse />
    }
])

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, displayName, email }= user.uid;
    dispatch(addUser({
   uid: uid,
        name: displayName,
        email: email
    }));

  } else {
    dispatch(removeUser());

  }
}); 
},[])

  return (
    <div>
        <RouterProvider router={appRouter} />
        
    </div>
  )
}

export default Body




