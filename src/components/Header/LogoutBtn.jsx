import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logout} '../../store/authSlice'

export const LogoutBtn = () => {
  const dispatch = useDispatch()
  // bring logout from authSlice 
  const logoutHandler = () => {
    authService.logout().then(() => {
      //if logout done
      dispatch(logout())//distpatch logout so store have info updated
    })
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'>
    Logout
    </button>
  )
}
