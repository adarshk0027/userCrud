import { Routes, Route } from 'react-router-dom'
import React from 'react'
import CreateUserForm from '../CreateUserForm'
import ListUser from '../ListUser'
import { GlobalProvider } from '../Context/GlobalContext'
import EditUser from '../EditUser'
import Viewprofile from '../VuewProfile'
import EditProfile from '../EditProfile'
function RouterConfig () {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<ListUser></ListUser>}></Route>
        <Route path='home' element={<ListUser></ListUser>}></Route>
        <Route path='create-user' element={<CreateUserForm></CreateUserForm>}></Route>
        <Route path='edit:Id' element={<EditUser></EditUser>}></Route>
        <Route path='viewprofile:Id' element={<Viewprofile></Viewprofile>}></Route>
        <Route path='profileChange:Id' element={<EditProfile></EditProfile>}></Route>
        </Routes>
    </GlobalProvider>
  )
}

export default RouterConfig
