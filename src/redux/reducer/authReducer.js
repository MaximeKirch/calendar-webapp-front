import { LOGIN } from '../actions/auth'
import { LOGOUT } from '../actions/user'

const initialState = {
    isConnected: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN : 
        return {...state, initialState: action.payload, isConnected : true}

        case LOGOUT :
        return {initialState : {}, isConnected : false}

        default:
            return state
    }
}

export default authReducer

