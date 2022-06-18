import { LOGIN } from '../actions/auth'

const initialState = {
    isConnected: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN : 
        return {...state, initialState: action.payload, isConnected : true}

        default:
            return state
    }
}

export default authReducer

