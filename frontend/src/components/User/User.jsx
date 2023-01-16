import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../actions/User'

const User = () => {
    const fetchData = async()=>{
        const {data} = await axios.get('http://localhost:5000/api/me')
        console.log(data);
    }
    useEffect(()=>{
        fetchData()
       
    },[])
  return (
    <div>User</div>
  )
}

export default User