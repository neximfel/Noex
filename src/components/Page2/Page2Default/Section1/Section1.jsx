import { Link } from "react-router-dom"
import "./Section1.scss"
import { Photo } from "../../../../Images.js"


export default function Section1(){
    return(
        <>
            <section className="zagolovok_section1">
                <div className="zagolovok_section1_inside">
                    <h1>ПРОЕКТЫ</h1>
                    <Link to="/"><img src={Photo.ArrowToLeft} alt="" />На главную</Link>
                </div>
            </section>
        </>
    )
}