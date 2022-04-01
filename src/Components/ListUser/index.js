import React, { useContext } from 'react'
import UserProfile from '../user'
import { GlobalContext } from '../Context/GlobalContext'
function ListUser () {
  const { Users } = useContext(GlobalContext)
  console.log(Users)

  return (
    <div>
      <div className='List-head'>
        <h3>User List is Here....</h3>
      </div>
      <div className='lists '>
       {
         Users ? Users.map((user,pos)=>{
           return <UserProfile key={pos}
             Image={user.Image}
             FirstName={user.FirstName}
             id={user.id}
             ></UserProfile>
         })
         :""
       }

      </div>
    </div>
  )
}

export default ListUser
