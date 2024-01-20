import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Account } from './Account'
import { useSelector } from 'react-redux'

export const PrivateRoute = () => {
  const {isAuth} = useSelector(st=>st)
  return (isAuth? <Outlet /> : <Navigate to='/account' />)
}
