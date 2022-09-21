import Chart from "../elements/Chart"

const Header = () => {
    
    return (
        <header id="stats" className="header">
            <div className="header__content">
                <div className="header__content__title">Hedge Fund</div>
                <div className="header__content__text">Разнообразный и богатый опыт говорит нам, что постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки укрепления моральных ценностей. Однозначно, элементы политического.</div>
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