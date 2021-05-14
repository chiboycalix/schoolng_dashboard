import React from "react"
import firebaseInstance from '../firebase';

export const UserContext = React.createContext();

export const userContext = () => {
  return React.useContext(UserContext)
}

export const UserProvider = ({ children }) => {

  const getUsers = () => {
    return firebaseInstance.database().ref().child("Users")
  }

  const value = {
    getUsers,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}