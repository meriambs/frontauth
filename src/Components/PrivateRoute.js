import React , { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import {useDispatch,useSelector} from 'react-redux'
import {setContacts} from '../store/authSlice'
import {fetchAccount} from '../api/authuser'
import './navbar.css'

import NavBarContainer from "./NavBarContainer";
import User from '../Components/User/User'
import Admin from '../Components/Admin/Admin'
import Login from '../Components/Login'
const PrivateRoute = () => {


const dispatch = useDispatch()
const auth = useSelector(state=>state.authuser)
console.log('lina redux auth',auth)


const getAccout=async()=>{
  const data = await fetchAccount()
  console.log("data",data)
  dispatch(setContacts(data))
}
useEffect(()=>{
getAccout()
},[])


// ici el partie mt3 el logout 
const navigate = useNavigate()

const logout=()=>{
  localStorage.removeItem('token')
  navigate('/login')
}


// jiben token bich ken "ndou token hwka directement ymchi lio page si nnn yrj3 lil login "
  
const token = localStorage.getItem('token')
console.log('token el user specifique ', token )

return (

    <div>
         <div>
{
  token ? (<>   <NavBarContainer auth={auth} logout={logout} /> 
  {/* //lina bich n3mlou partie ken user 3adi comp user si nn admin  */}

  {auth.role === "admin" ? (<Admin  auth={auth} /> ):( <User   auth={auth}/>) } 
  
   </>) : (<Login/>)
}
         </div>


    </div>


  )



}

export default PrivateRoute