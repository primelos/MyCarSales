import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'


import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        // setLoading(false);
    });
    return unsubscribe;
    }, []);


    return (
       <Route 
        { ...rest }
        render = {props => {
            if (currentUser) {
                return <Component { ...props } />
            } else {
                return <Redirect to='/' />
            }
        }} 
       />
    )
}

export default PrivateRoute
