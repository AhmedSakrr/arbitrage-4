import ellipse from "../assets/ellipse.png"


const ApplicationArt = () => {
    return (
        <div className="application_art">
            <img className="application_art__ellipse application_art__ellipse_1" src={ellipse} alt="Application ellipse art" />
            <img className="application_art__ellipse application_art__ellipse_2" src={ellipse} alt="Application ellipse art" />
            <img className="application_art__ellipse application_art__ellipse_3" src={ellipse} alt="Application ellipse art" />
        </div>
    )
}

export default ApplicationArt