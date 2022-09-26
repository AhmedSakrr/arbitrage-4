import { useState, useEffect } from "react"
import ellipse from "../assets/ellipse.png"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { login, logout, refreshToken, getUserData } from "../actions/auth"
import { ThreeDots } from 'react-loader-spinner'
import jwt_decode from 'jwt-decode'
import { errorMsg, success } from "../elements/Notifications"
import cross from "../assets/cross.svg"
import axios from "axios"


const Account = ({login, logout, refreshToken, getUserData, isAuthenticated, token, refresh, user, loading}) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    let decodedToken = token !== null ? jwt_decode(token) : 0;
    let currentDate = new Date();

    const isExpired =  decodedToken.exp * 1000 < currentDate.getTime()

    useEffect(() => {
        if (token !== null) {
            if (isExpired) {
                refreshToken(refresh)
            } else {
                getUserData(token)
            }
        }
    }, [])

    const {username, password} = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = e => {
        e.preventDefault()

        login(username, password)
    }

    const logoutUser = () => {
        logout()
    }

    const withdraw = async (token) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const body = {"Authorization": `Bearer ${token}`}
        
        try {
            const res = await axios.post("https://achedge.net/api/withdraw/", body, config)
            success(res.data["success"])
        }
        catch (error) {
            errorMsg("Сессия истекла, перезагрузите страницу")
        }
    }

    return (
        <div className="account block_bg">
            <img style={{display: "none"}} onClick={logoutUser} className="account__cross" src={cross} alt="Cross" />
            { loading ?
                <div className="account__loader">
                    <div className="account__loader__wrapper">
                        <ThreeDots color="#8960FF"/>
                    </div>
                </div>
            :
            <>
                {isAuthenticated && user !== {} ?  
                    <>
                        <div className="account__wrapper">
                            <span>{user.name.length > 9 ? user.name.slice(0, 7) + "..." : user.name}</span>
                            <img onClick={logoutUser} className="account__cross" src={cross} alt="Cross" />
                        </div>
                        <div className="account__info">
                            <div className="account__info__wrapper block_bg">
                                <span>Чистая прибыль</span>
                                <span className="account__info__value">{user.profit}$</span>
                            </div>
                        </div>
                        <div className="account__info">
                            <div className="account__info__wrapper block_bg">
                                <span>Взнос</span>
                                <span className="account__info__value">{user.balance}$</span>
                            </div>
                        </div>
                    </>
                :
                    <form onSubmit={onSubmit} className="account__login_form">
                        <div className="account__login_form__item">
                            <span>Авторизация</span>
                        </div>
                        <div className="account__login_form__item">
                            <label>Логин</label>
                            <input required name="username" onChange={(e) => onChange(e)} onFocus={(e) => e.target.placeholder = ""}  className="block_bg" type="text" placeholder="login" />
                        </div>
                        <div className="account__login_form__item">
                            <label>Пароль</label>
                            <input required name="password" onChange={(e) => onChange(e)} onFocus={(e) => e.target.placeholder = ""}  className="block_bg"  type="password" placeholder="password" />
                        </div>
                        <button type="submit" className="account__login_form__button block_bg">Вход</button>
                    </form>
                }
                {isAuthenticated ? <button onClick={() => withdraw(token)} className="account__withdraw block_bg">Вывод</button> : null}
            </>
            }
            <img className="account__ellipse" src={ellipse} alt="Ellipse art" />
        </div>
    )
}

Account.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    refreshToken: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string,
    refresh: PropTypes.string,
    user: PropTypes.object,
    loading: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    refresh: state.auth.refresh,
    user: state.auth.user,
    loading: state.auth.loading,
})

export default connect(mapStateToProps, {login, logout, refreshToken, getUserData})(Account)