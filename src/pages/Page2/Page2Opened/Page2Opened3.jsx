import "./Page2Opened.scss"
import { Link } from "react-router-dom"
import Section1 from "../../../components/Page2/Page2Opened/Section1/Variant3/Section1.jsx"
import Section2 from "../../../components/Page2/Page2Opened/Section2/Section2.jsx"

export default function Page2Opened3(){
    return(
        <>
            <div className="page2_ope_div_container">
                <Section1/>
                    <Section2/>
            </div>
        </>
    )
}