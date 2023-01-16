import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import User from './components/User/User'
function App() {
  const {user} = useSelector((state)=>state.user)
  let userDetails = localStorage.getItem('user_details')
  const parseUser = JSON.parse(userDetails)
  useEffect(()=>{
   
    console.log(parseUser);
  },[])
  return (
    <Router>
      <h1>Hello, {parseUser ? parseUser.name:'Not authorized'}
      
      </h1>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/me' element={<User/>}/>
      </Routes>
    </Router> 
  )
}

export default App
