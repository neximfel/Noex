import { Link } from "react-router-dom"
import "./Section1.scss"
import { Photo } from "../../../../../Images.js"


export default function Section1(){
    return(
        <>
            <section className="zagolovok_section1">
                <div className="zagolovok_section1_inside">
                    <h1>ЗАВОД ЗИЛ</h1>
                    <Link to="/projects"><img src={Photo.ArrowToLeft} alt="" />К проектам</Link>
                </div>
            </section>
        </>
    )
}