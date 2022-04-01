import React,{useContext} from 'react'
import "../VuewProfile/viewprofile.css"
import { useParams,Link } from 'react-router-dom';
import {GlobalContext} from '../Context/GlobalContext'
function Viewprofile () {
  const {Users}=useContext(GlobalContext);
  console.log(Users);
  const {Id}=useParams()
console.log(Id);
 const CurrentUser= Users.find((user)=>{
    return user.id===Number(Id)
  })
  console.log(CurrentUser);
  return (
    <div className='container mt-4 mb-4 p-3 d-flex justify-content-center'>
      <div className='card p-4'>
        <div className=' image d-flex flex-column justify-content-center align-items-center'>
          <button className='btn btn-secondary'>
            <img
              src={CurrentUser.Image}
              height='100'
              width='100'
            />
          </button>
          <span className='name mt-3'>{CurrentUser.FirstName} </span>
          <span className='idd'>@{CurrentUser.UserName}</span>
          <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
            <span className='idd1'>{CurrentUser.Email}</span>
            <span>
              <i className='fa fa-copy'></i>
            </span>
          </div>
          <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
            <span className='number'>
              {CurrentUser.Salary} <span className='follow'>Earnings</span>
            </span>
          </div>
          <div className=' d-flex mt-2'>
            <Link className='btn-warning' to={`/profileChange${Id}`}>Edit Profile</Link>
          </div>
          <div className='text mt-3'>
            <span>
              {CurrentUser.About}
            </span>
          </div>

          <div className='gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center'>
            <span>
              <i className='fa fa-twitter'></i>
            </span>
            <span>
              <i className='fa fa-facebook-f'></i>
            </span>
            <span>
              <i className='fa fa-instagram'></i>
            </span>
            <span>
              <i className='fa fa-linkedin'></i>
            </span>
          </div>
          <div className=' px-2 rounded mt-4 date '>
            <span className='join'>Joined May,2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewprofile
