import { configureStore } from '@reduxjs/toolkit'
import allUsersReducer from '../reducer/allUsers';
import userReducer from '../reducer/userReducer'
import authReducer from '../reducer/authReducer'

export default configureStore({
    reducer : {
    user : userReducer,
    allUsers : allUsersReducer,
    auth: authReducer
    }
})
