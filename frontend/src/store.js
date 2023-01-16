import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './reducer/User'


const store = configureStore({
    reducer:{
        user:userReducer
    }
})

export default store