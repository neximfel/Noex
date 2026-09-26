import "./Section1.scss"
import { useState } from "react"
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"



export default function Section1(){

    const [activeDot, setActiveDot] = useState(0)
    const totalSlides = 5;

    const goPrev = () => {
        setActiveDot((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }
    const goNext = () => {
        setActiveDot((next) => (next === totalSlides - 1 ? 0 : next + 1))
    }
    
    return(
        <>
            <section className="section1">
                <div className="section1_inside">
                    <div className="section1_inside_top">
                        <div className="section1_inside_top_first">
                            <h1>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ</h1>
                            <p>С равным успехом  мы работаем на участках строительства технически сложных и ответсвенных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.</p>
                        </div>
                        <div className="section1_inside_top_second">
                            <div className="section1_inside_top_second_buttons">
                                <Link to="/" className="button__look">ПОСМОТРЕТЬ УСЛУГИ</Link>
                                <Link to="/projects" className="button__our_projects">НАШИ ПРОЕКТЫ</Link>
                            </div>
                            <p>Выполняем инженерные изыскания в строительстве с 1988 года</p>
                        </div>
                    </div>
                    <div className="section1_inside_bot">
                        <div className="section1_inside_bot_left">
                            {Array.from({ length:totalSlides }).map((_,meow) => (
                                <button
                                    key={meow}
                                    className={activeDot === meow ? "active" : ""}
                                    onClick={() => setActiveDot(meow)}
                                >
                                    <div></div>
                                </button>
                            ))}
                        </div>
                        <div className="section1_inside_bot_right">
                            <div className="section1_inside_bot_right_arrows">
                                <button onClick={goPrev}><img src={Photo.ArrowToLeft} alt="" /></button>
                                <button onClick={goNext}><img src={Photo.ArrowToRight} alt="" /></button>
                            </div>
                            <span> <p>0{activeDot + 1}</p> <p>-</p> <p>05</p> </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}