import Chart from "../elements/Chart"

const Header = () => {
    
    return (
        <header id="stats" className="header">
            <div className="header__content">
                <div className="header__content__title">Hedge Fund</div>
                <div className="header__content__text">A. C. Hedge - это инвестиционный фонд, который позволит вам не потерять деньги в это тяжелое время и быстро их приумножить. Надежными и прибыльными методами мы гарантируем пассивный доход нашим участникам, а взамен оставляем себе комиссию за услуги.</div>
                <button 
                    onClick={() => window.scrollTo({
                                top: document.querySelector("#application").getBoundingClientRect().top + document.documentElement.scrollTop,
                                behavior: "smooth"}
                            )}
                    className="header__content__button block_bg">
                Подать заявку</button>
            </div>
            <Chart/>
        </header>
    )
}

export default Header