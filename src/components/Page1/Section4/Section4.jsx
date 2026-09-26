import "./Section4.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const places = [
    {place: "Москва-Сити"},
    {place: "Стадион «Спартак»"},
    {place: "ТРК «Авиапарк»"},
    {place: "АТК на Кутузовском"},
    {place: "Завод «ЗИЛ»"},
    {place: "Станция «Окская»"},
]
const arts = [
    {image: Photo.Place1, title: "Москва-Сити", year: "2006"},
    {image: Photo.Place2, title: "Стадион «Спартак»", year: "2006"},
    {image: Photo.Place3, title: "ТРК «Авиапарк»", year: "2004"},
    {image: Photo.Place4, title: "АТК на Кутузовском", year: "2003-2004"},
    {image: Photo.Place5, title: "Завод «ЗИЛ»", year: "2001"},
    {image: Photo.Place6, title: "Станция «Окская»", year: "1996-2015"},
]

export default function Section4(){

    const [isCurrent, setIsCurrent] = useState(0)
    const [isOpen, setIsOpen] = useState(0)
    
    const totalSlides = 6;
    
    const toggleArticle = (art) => {
        setIsOpen((prev) => (prev === art ? null : art))
    }
        const goPrev = () => {
        setIsCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }
    const goNext = () => {
        setIsCurrent((next) => (next === totalSlides - 1 ? 0 : next + 1))
    }
    const currentArt = arts[isCurrent]
    const nextArt = arts[isCurrent === totalSlides - 1 ? 0 : isCurrent + 1]

    return(
        <>
            <section className="section4">
                <div className="section4_inside">
                    <div className="section4_inside_top">
                        <h1>ВЫСОКОЕ КАЧЕСТВО РАБОТЫ В НАШИХ ПРОЕКТАХ</h1>
                        <span><p>Более</p><h1>6</h1><p>Крупных проектов</p></span>
                    </div>
                    <div className="section4_inside_bottom">
                        <div className="section4_inside_bottom_left">
                            <div className="section4_inside_bottom_left_places">
                                {places.map((meow, index) => (
                                    <button
                                        key={index}
                                        className={isCurrent === index ? "marked" : ""}
                                        onClick={() => setIsCurrent(index)}
                                    >{meow.place}</button>
                                ))}
                            </div>
                            <div className="section4_inside_bottom_left_arrows">
                                <button onClick={goPrev} id="left_arrow"><img src={Photo.ArrowToLeft} alt="" /></button>
                                <button onClick={goNext} id="right_arrow"><img src={Photo.ArrowToRight} alt="" /></button>
                            </div>
                        </div>
                        <div className="section4_inside_bottom_right">
                                <article>
                                    <img src={currentArt.image} alt="" onClick={() => toggleArticle(currentArt)}/>
                                    <h2>{currentArt.title}</h2>
                                    <p>{currentArt.year}</p>
                                    <p className={`art_text_p_hidden ${isOpen === currentArt ? "opened" : ""}`}>Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida. </p>
                                    <button onClick={() => toggleArticle(currentArt)}>{isOpen === currentArt ? "СВЕРНУТЬ" : "ПОДРОБНЕЕ"}</button>
                                </article>
                                <article>
                                    <img src={nextArt.image} alt="" onClick={() => toggleArticle(nextArt)}/>
                                    <h2>{nextArt.title}</h2>
                                    <p>{nextArt.year}</p>
                                    <p className={`art_text_p_hidden ${isOpen === nextArt ? "opened" : ""}`}>Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida. </p>
                                    <button onClick={() => toggleArticle(nextArt)}>{isOpen === nextArt ? "СВЕРНУТЬ" : "ПОДРОБНЕЕ"}</button>
                                </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}