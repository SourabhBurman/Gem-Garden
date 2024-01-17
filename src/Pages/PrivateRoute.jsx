import React from 'react'
import { Outlet } from 'react-router-dom'
import { Account } from './Account'

export const PrivateRoute = () => {
  return (false? <Outlet /> : <Account />)
}
