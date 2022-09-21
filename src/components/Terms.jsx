import SectionHeader from "../elements/SectionHeader"
import MotionDiv from "../elements/MotionDiv"
import art from "../assets/terms/terms_card-art.svg"


const Terms = () => {

    const styles = {
        width: "45%",
        minWidth: "35rem"
    }

    return (
        <section id="terms" className="terms">
            <SectionHeader text="Условия работы"/>
            <div className="terms__wrapper">
                <MotionDiv styles={styles}>
                    <div className="terms__item block_bg">
                        <div className="terms__item__percent">50%</div>
                        <p className="terms__item__term">прибыли идут нашей команде</p>
                        <img className="terms__item__art" src={art} alt="Circles art" />
                    </div>
                </MotionDiv>
                <MotionDiv styles={styles}>
                    <div className="terms__item block_bg">
                        <div className="terms__item__percent">50%</div>
                        <p className="terms__item__term">прибыли вам каждые 3 дня</p>
                        <img className="terms__item__art" src={art} alt="Circles art" />
                    </div>
                </MotionDiv>
            </div>
        </section>
    )
}

export default Terms