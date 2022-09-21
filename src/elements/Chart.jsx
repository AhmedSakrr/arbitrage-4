import axios from 'axios'
import { useEffect, useState } from "react"
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Chart = () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const [total, setTotal] = useState(0)
    const maxValue = 150000

    useEffect(() => {
        async function getTotal() {
            try {
                const res = await axios.get("http://194.163.155.195/api/total/", config)
                setTotal(parseInt(res.data["total"]))
            }
            catch (e) {
                console.error(e)
            }
        }
        getTotal()
    }, [])

    return (
        <div className="chart block_bg">
            <div className="chart__bar_wrapper">
                <CircularProgressbar
                    maxValue={maxValue}
                    value={total}
                    styles={buildStyles({
                        pathColor: `#8960ff`,
                        trailColor: '#D9CCFF',
                    })}>
                </CircularProgressbar>
                <div className='chart__text'><span>внесено</span><span className='chart__text__value'>{total}$</span></div>
            </div>
            <div className='chart__pool'>Всего: 150000$</div>
        </div>
    )
}

export default Chart