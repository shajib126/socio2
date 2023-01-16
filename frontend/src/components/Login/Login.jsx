import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, loginUser } from '../../actions/User'

import "./Login.css"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {error,loading,user} = useSelector((state)=>state.user)
   
    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(loginUser(email,password)).then((result) => {
            
            navigate('/')
        }).catch((err) => {
            alert(err)
        });
       
    }
    useEffect(()=>{
        if(user){
            localStorage.setItem('user_details',JSON.stringify({name:user.user.name,email:user.user.email,authenticated:user.isAuthenticated,token:user.token}))
            
        }
    },[user,dispatch])
   
  return (
    <div className="login_wrapper">
    <form onSubmit={handleSubmit} className="login">
        <h1>Login</h1>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' value={email} />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' value={password}/>
        <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login