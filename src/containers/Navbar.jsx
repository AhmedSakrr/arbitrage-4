import { useRef } from "react"

const Navbar = (props) => {

    const navbarRef = useRef()
    const blackoutRef = useRef()

    const toogleNavbar = () => {
        const navbar = navbarRef.current
        navbar.classList.toggle("active")
        if (!navbar.classList.contains("active")) {
            setTimeout(() => {
                blackoutRef.current.style.top = "-100vh"
            }, 300)
        } else {
            blackoutRef.current.style.top = "0"
        }
    }

    return (
        <div ref={navbarRef} className="navbar_wrapper">
            <div className="navbar">
                {props.children}
            </div>
            <div ref={blackoutRef} className="navbar__blackout"></div>
            <div onClick={toogleNavbar} className="arrow-icon">
                <span className="left-bar"></span>
                <span className="right-bar"></span>
            </div>
        </div>
    )
}

export default Navbar