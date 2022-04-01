import React, { useContext, useEffect, useState } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {  useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'

const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}))

const INITIAL_STATE = {
  id: '',
  FirstName: '',
  LastName: '',
  Company: '',
  Age: '',
  Image: '',
  Address: '',
  Salary: ''
}

function EditUser () {
  const Navigate=useNavigate()
  const classes = useStyles()
  const { Users ,EditUser} = useContext(GlobalContext)
  console.log(Users);
  const { Id } = useParams()
 console.log(Id);
//Set A State for Form Fields

const [Form_Field_Value,SetFormValue]=useState(INITIAL_STATE)
//handle change
const handleChange = e => {
      SetFormValue({...Form_Field_Value,[e.target.name]:e.target.value})
}
//handleSubmit
const handleSubmit=()=>{
    EditUser(Form_Field_Value)
    Navigate('/')
    
}
//useEffect
useEffect(()=>{
    const CurrentUser=Users.find((user)=>{
        return user.id===Number(Id)
    })
    console.log(CurrentUser);
    SetFormValue(CurrentUser)
},[Id,Users])

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={{ color: 'blue' }}>Edit User Profile</Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth='md' spacing={2} xs={12}>
            <div className={classes.formWrapper}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='ID'
                      name="id"
                      defaultValue={Form_Field_Value.id}
                      
                    ></input>
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='FirstName'
                      name="FirstName"
                      
                      onChange={handleChange}
                      defaultValue={Form_Field_Value.FirstName}
                    ></input>
                  </Grid>
                  
                  
                  <Grid item xs={12}>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Image'
                      name="Image"
                      onChange={handleChange}
                      defaultValue={Form_Field_Value.Image}

                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <button
                      type='submit'
                      className='bg-primary w-100 text-white'
                    >
                      Submit
                    </button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditUser
