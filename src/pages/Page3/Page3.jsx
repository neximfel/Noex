import { Link } from "react-router-dom"
import "./Page3.scss"
import Section1 from "../../components/Page3/Section1/Section1.jsx"
import Section2 from "../../components/Page3/Section2/Section2.jsx"
import Section3 from "../../components/Page3/Section3/Section3.jsx"
import Section4 from "../../components/Page3/Section4/Section4.jsx"
import Section5 from "../../components/Page3/Section5/Section5.jsx"
import Section6 from "../../components/Page3/Section6/Section6.jsx"


export default function Page3(){
    return(
        <>
            <div className="page3_sections_group1">
                <div className="page3_sections_group2">
                    <div className="page3_sections_group3">
                        <Section1/>
                            <Section2/>
                    </div>
                    <Section3/>
                </div>
                    <Section4/>
                        <Section5/>
                            <Section6/>
            </div>
        </>
    )
}