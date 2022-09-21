import SectionHeader from "../elements/SectionHeader"
import ApplicationArt from "../elements/ApplicationArt"
import Form from "../elements/Form"


const Application = () => {
    return (
        <div id="application" className="application">
            <SectionHeader text="Подать заявку"/>
            <div className="application__wrapper">
                <ApplicationArt/>
                <Form/>
            </div>
        </div>
    )
}

export default Application