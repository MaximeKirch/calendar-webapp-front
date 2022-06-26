import { GET_USER } from "../actions/user"
import { LOGOUT } from '../actions/user'

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER :
            return action.payload

        case LOGOUT : 
            return state = {}

        default:
             return state
    }
}

export default userReducer