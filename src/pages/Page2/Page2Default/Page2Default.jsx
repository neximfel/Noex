import "./Page2Default.scss"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import Section1 from "../../../components/Page2/Page2Default/Section1/Section1.jsx"
import Section2 from "../../../components/Page2/Page2Default/Section2/Section2.jsx"

export default function Page2Default(){
    return(
        <>
            <div className="page2_def_div_container">
                <Section1/>
                    <Section2/>
            </div>
        </>
    )
}