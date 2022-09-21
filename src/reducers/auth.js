import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    REFRESH_TOKEN,
    REFRESH_TOKEN_FAILED,
    GET_USER_DATA,
    LOADING
} from "../actions/types"

const initialState = {
    token: localStorage.getItem("token"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: false,
    loading: false,
    user: {}
}

export default function(state=initialState, action) {
    const {type, payload} = action

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access)
            localStorage.setItem('refresh', payload.refresh)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access,
                refresh: payload.refresh
            }
        case LOGIN_FAILED:
        case LOGOUT:
            localStorage.removeItem("token")
            localStorage.removeItem("refresh")
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                refresh: null,
                user: {},
            }
        case REFRESH_TOKEN:
            localStorage.setItem("token", payload.access)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access,
            }
        case REFRESH_TOKEN_FAILED:
            localStorage.removeItem("token")
            localStorage.removeItem("refresh")
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                refresh: null
            }
        case GET_USER_DATA:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false,
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}