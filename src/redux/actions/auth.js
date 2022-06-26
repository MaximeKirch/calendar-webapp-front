import axios from "axios"
import { getUser } from "./user"

export const LOGIN = "LOGIN"

export const login = (email, password) => {
    return (dispatch) => {
        return axios
            .post('http://localhost:3001/api/auth/login', {
                email: email,
                password: password
            })
            .then((res) => {
                dispatch({ type : LOGIN, payload: res.data})
                dispatch(getUser(res.data.id))
            })
            .catch((err) => console.log(err))
    }
}