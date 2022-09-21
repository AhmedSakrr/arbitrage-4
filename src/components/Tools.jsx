import SectionHeader from "../elements/SectionHeader"
import icon1 from "../assets/tools/icon1.svg"
import icon2 from "../assets/tools/icon2.svg"
import icon3 from "../assets/tools/icon3.svg"
import icon4 from "../assets/tools/icon4.svg"
import icon5 from "../assets/tools/icon5.svg"
import ellipse from "../assets/ellipse.png"
import MotionDiv from "../elements/MotionDiv"

const Tools = () => {

    const styles = {
        width: "30%",
        minWidth: "30rem"
    }
    return (
        <section id="tools" className="tools">
            <SectionHeader text="Используемые инструменты"/>
            <div className="tools__wrapper">
                <MotionDiv styles={styles}>
                    <div className="tools__item block_bg">
                        <img className="tools__item__icon" src={icon5} alt="Arbitrage icon" />
                        <p>Международный арбитраж в Турцию и страны Европы</p>
                        <img className="tools__item__art" style={{transform: "translate(-50%, -50%) rotate(180deg)"}} src={ellipse} alt="Ellipse art" />
                    </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                    <div className="tools__item block_bg">
                        <img className="tools__item__icon" src={icon1} alt="Arbitrage icon" />
                        <p>Межбиржевые арбитраж схемы</p>
                        <img className="tools__item__art" style={{transform: "translate(-50%, -50%) rotate(180deg)"}} src={ellipse} alt="Ellipse art" />
                    </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                <div className="tools__item block_bg">
                    <img className="tools__item__icon" src={icon4} alt="Arbitrage icon" />
                    <p>Обмен криптовалюты на большую базу постоянных клиентов</p>
                    <img className="tools__item__art" style={{transform: "translate(-50%, -50%) rotate(180deg)"}} src={ellipse} alt="Ellipse art" />
                </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                <div className="tools__item block_bg">
                    <img className="tools__item__icon" src={icon2} alt="Arbitrage icon" />
                    <p>Сотрудничество с иностранными командами по запуску крипто-токенов</p>
                    <img className="tools__item__art" style={{transform: "translate(-50%, -50%) rotate(180deg)"}} src={ellipse} alt="Ellipse art" />
                </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                    <div className="tools__item block_bg">
                        <img className="tools__item__icon" src={icon3} alt="Arbitrage icon" />
                        <p>Ряд приватных высокодоходных схем</p>
                        <img className="tools__item__art" style={{transform: "translate(-50%, -50%) rotate(180deg)"}} src={ellipse} alt="Ellipse art" />
                    </div>
                </MotionDiv>
            </div>
        </section>
    )
}

export default Tools