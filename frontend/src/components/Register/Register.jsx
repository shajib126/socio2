import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { regiserUser } from '../../actions/User'
import "./Register.css"


const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [photo,setPhoto] = useState("")
    const dispatch = useDispatch()
    const {error,loading} = useSelector((state)=>state.user)
    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(regiserUser(name,email,password,photo))
    }
    useEffect(()=>{
      if(error){
        alert(error)
      }
    },[dispatch,error])
  return (
    <div className="register-wraper">
    <form className='register' onSubmit={handleSubmit}>
        <h2>Register User</h2>
        <span className='border'><hr /></span>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='name' />
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='email' />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='password' />
        <input onChange={(e)=>setPhoto(e.target.files[0])} name='photo' type="file" accept='image/*' />
        <button type='submit'>Register</button>
    </form>
    </div>
  )
}

export default Register