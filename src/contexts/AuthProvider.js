/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useLocalStorage('userProfile', null)

  return (
    <AuthContext.Provider value={{ userProfile, setUserProfile }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
