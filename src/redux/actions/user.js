import axios from 'axios'

export const GET_USER = "GET_USER"
export const LOGOUT = "LOGOUT"

export const getUser = (userId, token) => {
    return(dispatch) => {
        return axios
            .get(`http://localhost:3001/api/user/${userId}`)
            .then((res) => {
                dispatch({ type : GET_USER, payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const logout = () => {
    return(dispatch) => {
        return axios
            .get('http://localhost:3001/api/auth/logout')
            .then((res) => {
                dispatch({type: LOGOUT})
            })
            .catch((err) => console.log(err))
    }
}