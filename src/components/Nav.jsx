import statsIcon from "../assets/nav/stats.svg"
import termsIcon from "../assets/nav/terms.svg"
import toolsIcon from "../assets/nav/tools.svg"
import rulesIcon from "../assets/nav/rules.svg"
import applicationIcon from "../assets/nav/application.svg"

const Nav = () => {

    const scrollTo = (elementId) => {
        const element = document.querySelector("#" + elementId)
        const yOffset = element.getBoundingClientRect().top + document.documentElement.scrollTop
        window.scrollTo({
            top: yOffset,
            behavior: "smooth"
        });
    }

    return (
        <nav className="nav block_bg">
            <div onClick={() => {scrollTo("stats")}} className="nav__item">
                <img src={statsIcon} alt="Statistics icon" />
                <span>Статистика</span>
            </div>
            <div onClick={() => scrollTo("terms")} className="nav__item">
                <img src={termsIcon} alt="Terms icon" />
                <span>Условия</span>
            </div>
            <div onClick={() => scrollTo("tools")} className="nav__item">
                <img src={toolsIcon} alt="Tools icon" />
                <span>Инструменты</span>
            </div>
            <div onClick={() => scrollTo("rules")} className="nav__item">
                <img src={rulesIcon} alt="Rules icon" />
                <span>Правила участия</span>
            </div>
            <div onClick={() => scrollTo("application")} className="nav__item">
                <img src={applicationIcon} alt="Application icon" />
                <span>Подать заявку</span>
            </div>
        </nav>
    )
}

export default Nav