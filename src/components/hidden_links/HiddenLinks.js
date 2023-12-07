import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'



function ShowOnLogin({children}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if(isLoggedIn) {
        return children;
    } return null
  
}

export default  ShowOnLogin

export function ShowOnLogout({children}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if(!isLoggedIn) {
        return children;
    } return null
  
}