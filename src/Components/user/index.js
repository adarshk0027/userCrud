import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
import '../user/index.css'
function UserProfile ({ Image, FirstName ,id}) {
  const {DeleteUser}=useContext(GlobalContext);
 console.log(DeleteUser);
  return (
    <div className='UserProfile bg-white '>
      <div className='profileContainer mx-auto rounded'>
        <div className='img rounded-circle bg-success mx-auto'>
          <img width={150} src={Image} alt='' />
        </div>
        <div className='name'>
          <h3 className='text-primary'>{FirstName}</h3>
        </div>
        <div className='buttons d-flex   Link'>
          <Link className=' btn-warning rounded Link' to={`/edit${id}`}>
            <strong>Edit</strong>
          </Link>
          <button className=' btn-danger rounded Link' 
          onClick={()=>{
            alert(`Do You Want To Delete  ${FirstName}`)
            DeleteUser(id)
          }}
          >
            <strong>Delete</strong>
          </button>
        </div>
        <div className="ViewProf ">
        <Link className=' btn-info m-l-3 rounded' to={`/viewprofile${id}`}>
            <strong>View Profile</strong>
          </Link>
          </div>
  
      </div>
    </div>
  )
}

export default UserProfile
