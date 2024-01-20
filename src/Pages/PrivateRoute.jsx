import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Account } from './Account'

export const PrivateRoute = () => {
  return (false? <Outlet /> : <Navigate to='/account' />)
}
