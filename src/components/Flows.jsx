import axios from 'axios'
import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { ThreeDots } from 'react-loader-spinner'


const Flows = ({type, header}) => {

    const [traffic, setTraffic] = useState()

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    useEffect(() => {
        async function getTraffic() {
            try {
                const res = await axios.get(`https://achedge.net/api/${type}/`, config)
                setTraffic(res.data)
            }
            catch (e) {
                console.error(e)
            }
        }
        getTraffic()
    }, [])

    return (
            <section className="flows">
                <div className="flows__header">{header}</div>
                <div className="flows__items block_bg">
                    {traffic ? 
                        <>
                            {traffic.map((item, i) => (
                                <div key={i} className="flows__items__item block_bg"><nobr>{item.user} {item.amount}$</nobr></div>
                            ))}
                        </>
                    :
                        <div className="flows__loader">
                            <ThreeDots color="#8960FF"/>
                        </div>
                    }
                </div>
                
            </section>
    )
}

Flows.propTypes = {
    type: PropTypes.string.isRequired,
    header: PropTypes.string,
}

export default Flows