import axios from 'axios'

export const regiserUser = (name,email,password,photo)=>async(dispatch)=>{
    try {
        dispatch({
            type:'registerRequest'
        })
        const {data} = await axios.post('http://localhost:5000/api/crate-user',{name,email,password,photo},{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        dispatch({
            type:"registerSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"registerFailure",
            payload:error.response.data.message
        })
    }
   
}
export const loginUser = (email,password) =>async(dispatch)=>{
    try {
        dispatch({
            type:"loginRequest"
        })
        const {data} = await axios.post('http://localhost:5000/api/login',{email,password},{
            headers:{
                'Content-Type':'application/json'
            }
        })
        dispatch({
            type:"loginSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"loginFailure",
            payload:error.response.data.message
        })
    }
}
export const loadUser = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:'loadUserRequest'

        })
        const {data} = await axios.get('http://localhost:5000/api/me')
        dispatch({
            type:"loadUserSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:'loadUserFailure',
            payload:error.response.data.message
        })
    }
}