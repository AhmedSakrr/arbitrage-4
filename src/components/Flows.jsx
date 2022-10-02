import axios from 'axios'
import { useEffect, useState } from "react"
import { ThreeDots } from 'react-loader-spinner'
import wallet from '../assets/flows/wallet.svg'
import box from '../assets/flows/box.svg'
import deposit from '../assets/flows/deposit.svg'


const Flows = () => {

    const trafficTypesToInfo = {"DT": [deposit, "Взнос"], "PT": [wallet, "Выплата"], "BT": [box, "Бонус за приглашение"]}

    const [traffic, setTraffic] = useState()

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    useEffect(() => {
        async function getTraffic() {
            try {
                const res = await axios.get(`https://achedge.net/api/traffic/`, config)
                setTraffic(res.data)
            }
            catch (e) {
                console.error(e)
            }
        }
        getTraffic()
    }, [])

    return (
            <section className="flows block_bg">
                <table className="flows__items">
                    <tbody>
                        {traffic ?
                        <>
                            {traffic.map((item, i) => (
                                <tr className='flows__items__item' key={i}>
                                    <th><img src={trafficTypesToInfo[item.type][0]} alt="Traffic type" /></th>
                                    <th className='flows__items__item__id block_bg'>ID {item.user.length > 9 ? item.user.slice(0, 7) + "..." : item.user}</th>
                                    <th>{item.type === "BT" || item.type === "PT" ? "+" : null}{item.amount}$</th>
                                    <th>{trafficTypesToInfo[item.type][1]}</th>
                                    <th className='flows__items__item__date'>{item.date.slice(5, item.date.length).split("T")[0].split("-").join(".")}</th>
                                </tr>
                            ))}
                        </>
                    :
                        <tr className="flows__loader">
                            <ThreeDots color="#8960FF"/>
                        </tr>
                    }
                        </tbody>
                </table>
                    
            </section>
    )
}

export default Flows