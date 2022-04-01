
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

//  SET INITIAL STATE
const InitialState = {
  USERS: [
    {
      id: 1,
      FirstName: 'Adarsh',
      UserName: 'adarsh_k_adhu',
      Email: 'adarshk0027@gmail.com',
      Image:'https://cdn.iconscout.com/icon/premium/png-64-thumb/male-1615941-1372040.png',
      Salary: '21000',
      About: 'Its All About mE Im Adrash K' 
    },
    {
      id: 2,
      FirstName: 'Athira',
      UserName: 'athira_athi',
      Email: 'Crossroads',
      Image:'https://cdn.iconscout.com/icon/premium/png-64-thumb/girl-347-774613.png',
      Salary: '21777',
      About: '   me ladki 2  L.KM'
    }
  ]
}
//CREATE GLOBAL CONTEXT
export const GlobalContext=createContext(InitialState);
//PROVIDER COMPONENT
export const GlobalProvider=({children})=>{
  const [state,dispatch]=useReducer(AppReducer,InitialState)
    const DeleteUser=(id)=>{
        console.log(id);
        dispatch({
            type:"DELETE_USER",
            payload:id
        })
    }
    const AddUser=(userData)=>{
      dispatch({
          type:"ADD_USER",
          payload:userData
      })
    }

  const EditUser=(EditData)=>{
    dispatch({
      type:"EDIT_USER",
      payload:EditData
  })

  }

  return (
      <GlobalContext.Provider value={{
        Users:  state.USERS,
        DeleteUser,
        AddUser,
        EditUser
      }}>
        {children}
      </GlobalContext.Provider>
  )
}


