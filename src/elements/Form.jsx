import axios from "axios"
import { useState } from "react"
import { success, errorMsg } from "./Notifications"

const Form = () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const [formData, setFormData] = useState({
        tg: "",
        email: "",
        payment: ""
    })

    const {tg, email, payment} = formData

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault()

        const body = JSON.stringify({tg, email, payment})
        
        try {
            const res = await axios.post("https://achedge.net/api/application/", body, config)
            success(res.data["success"])

            document.querySelectorAll(".application_form_input").forEach(input => {
                input.value = ""
            })
        }
        catch (error) {
            errorMsg(error.response.data["error"])
        }
    }


    return (
        <form onSubmit={onSubmit} className="application_form">
            <div className="application_form__item">
                <label>Telegram ID</label>
                <input required onFocus={(e) => e.target.placeholder = ""} onChange={(e) => onChange(e)} name="tg" className="block_bg application_form_input" type="text" placeholder="@telegramID" />
            </div>
            <div className="application_form__item">
                <label>Email</label>
                <input required onFocus={(e) => e.target.placeholder = ""} onChange={(e) => onChange(e)} name="email" className="block_bg application_form_input" type="email" placeholder="example@gmail.com" />
            </div>
            <div className="application_form__item">
                <label>Сумма взноса $</label>
                <input required onFocus={(e) => e.target.placeholder = ""} onChange={(e) => onChange(e)} name="payment" className="block_bg application_form_input" type="text" placeholder="550" />
            </div>
            <button className="application_form__button block_bg" type="sumbit">Отправить</button>
        </form>
    )
}

export default Form