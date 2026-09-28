import "./Section3.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const stats = [
    {title: "0", text: "Отрицательных заключений экспертизы"},
    {title: "100%", text: "Соблюдения сроков договоров"},
    {title: "2.5", text: "Тонны и терабайты архивной информации"},
    {title: "1000", text: "Более 1000 крупных объектов"},
    {title: "100", text: "Более 100 уникальных объектов"},
    {title: "", text: ""},
]

export default function Section3(){

    return(
        <>
            <section className="page3_section3">
                <div className="page3_section3_inside">
                    <p className="p_question">Инженерные изыскания</p>
                    <div className="page3_section3_inside_right">
                        <div className="page3_section3_inside_right_title">
                            <h2>МЫ ЗНАЕМ ОБ ЭТОМ ВСЕ!</h2>
                            <p>Мы стоим за крупнейшими и самыми сложными проектами столицы: все высотные здания комплекса «Москва сити», Стадион «Спартак Арена», станция метро «Окская», и многие другие работы.</p>
                        </div>
                        <div className="page3_section3_inside_right_stats">
                            {stats.map((meow, index) => (
                                <div key={index}>
                                    <h2>{meow.title}</h2>
                                    <p>{meow.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}