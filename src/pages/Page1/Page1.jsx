import { Link } from "react-router-dom"
import "./Page1.scss"
import Section1 from "../../components/Page1/Section1/Section1.jsx"
import Section2 from "../../components/Page1/Section2/Section2.jsx"
import Section3 from "../../components/Page1/Section3/Section3.jsx"
import Section4 from "../../components/Page1/Section4/Section4.jsx"
import Section5 from "../../components/Page1/Section5/Section5.jsx"
import Section6 from "../../components/Page1/Section6/Section6.jsx"
import Section7 from "../../components/Page1/Section7/Section7.jsx"
import Section8 from "../../components/Page1/Section8/Section8.jsx"
import Section9 from "../../components/Page1/Section9/Section9.jsx"
import Section10 from "../../components/Page1/Section10/Section10.jsx"

export default function Page1(){
    return(
        <>
            <div className="div_container1">
                <Section1/>
                    <Section2/>
                        <Section3/>
                            <Section4/>
                                <Section5/>
                                    <Section6/>
                                        <Section7/>
                                            <Section8/>
                                                <div className="div_container2">
                                                    <Section9/>
                                                        <Section10/>
                                                </div>
            </div>
        </>
    )
}