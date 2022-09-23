import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, REFRESH_TOKEN, REFRESH_TOKEN_FAILED, GET_USER_DATA, LOADING } from "./types"
import { success, errorMsg } from "../elements/Notifications"

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const body = JSON.stringify({username, password})

    try {
        dispatch({
            type: LOADING,
        })
        const res = await axios.post("http://194.163.155.195/api/token/", body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        success("Вход осуществлён")

        dispatch(getUserData(res.data.access))
    } catch (e) {
        dispatch({
            type: LOGIN_FAILED
        })
        console.log(e)
        errorMsg("Введены некоректные данные")
    }
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
    success("Вы вышли из аккаунта")
}

export const refreshToken = (refresh) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const body = JSON.stringify({refresh})

    try {
        dispatch({
            type: LOADING,
        })
        const res = await axios.post("http://194.163.155.195/api/token/refresh/", body, config)
        dispatch({
            type: REFRESH_TOKEN,
            payload: res.data
        })

        dispatch(getUserData(res.data.access))
    }
    catch (e) {
        dispatch({
            type: REFRESH_TOKEN_FAILED,
        })
    }
}

export const getUserData = (token) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        dispatch({
            type: LOADING,
        })

        const res = await axios.get("http://194.163.155.195/api/user/current/", config)
        
        dispatch({
            type: GET_USER_DATA,
            payload: res.data["user"]
        })
    } catch (e) {
        errorMsg("Не смогли получить данные о вашем балансе, попробуйте войти снова")
    }

    
}