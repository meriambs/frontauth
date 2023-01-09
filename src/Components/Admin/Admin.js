


import React ,{useEffect,useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from './Cards'
import {fetchAccounts} from '../../api/utilisateurs'
import {setAccounts} from '../../store/userSlice'

const Admin = ({auth}) => {
  const distpach = useDispatch()
  const users = useSelector(state=>state.account)
  console.log('auth chaympa ',auth)
  console.log('acounts',users)

  const getAllusers=async()=>{
    const data = await fetchAccounts()
    console.log('ghalti a tracker',data)
    distpach(setAccounts(data))
  }
  useEffect(()=>{
getAllusers()
  },[])


  console.log('liostet el db users',users)
  return (
    <div>
      <br/><br/>
{
  users.map((el)=>(<Cards  miniuser={el}/>))
}    </div>
  )
}

export default Admin