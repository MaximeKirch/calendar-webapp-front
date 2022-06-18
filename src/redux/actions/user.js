import axios from 'axios'

export const GET_USER = "GET_USER"

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