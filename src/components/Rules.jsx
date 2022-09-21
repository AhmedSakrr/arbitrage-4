import SectionHeader from "../elements/SectionHeader"
import circle from "../assets/Circle.svg"
import MotionDiv from "../elements/MotionDiv"


const Rules = () => {

    const styles = {
        width: "32%",
        minWidth: "33rem"
    }

    return (
        <section id="rules" className="rules">
            <SectionHeader text="Как участвовать?"/>
            <div className="rules__wrapper">
                <MotionDiv styles={styles}>
                <div className="rules__item block_bg">
                    <span className="rules__item__number">1</span>
                    <span className="rules__item__text">Заполните<br /> заявку</span>
                    <div className="rules__item__art"><img src={circle} alt="Circle art" /></div>
                </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                <div className="rules__item block_bg">
                    <span className="rules__item__number">2</span>
                    <span className="rules__item__text">Получите одобрение заявки</span>
                    <div className="rules__item__art"><img src={circle} alt="Circle art" /></div>
                </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                <div className="rules__item block_bg">
                    <span className="rules__item__number">3</span>
                    <span className="rules__item__text">Совершите взнос размером 500$ - 5000$</span>
                    <div className="rules__item__art"><img src={circle} alt="Circle art" /></div>
                </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                <div className="rules__item block_bg">
                    <span className="rules__item__number">4</span>
                    <span className="rules__item__text">Получите<br /><nobr>доступ к личному</nobr><br/>кабинету</span>
                    <div className="rules__item__art"><img src={circle} alt="Circle art" /></div>
                </div>
                </MotionDiv>
            </div>
        </section>
    )
}

export default Rules