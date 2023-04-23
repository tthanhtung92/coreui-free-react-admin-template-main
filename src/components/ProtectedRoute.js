/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthProvider'

export const ProtectedRoute = ({ children }) => {
  const { userProfile } = useAuth()
  if (!userProfile || userProfile.roles !== 'Admin') {
    // user is not authenticated
    return <Navigate to="/login" />
  }
  return children
}
