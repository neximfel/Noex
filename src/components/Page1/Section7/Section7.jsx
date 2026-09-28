import "./Section7.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const points = [
    {title: "30 лет работы", descr: "Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк"},
    {title: "Выполняем комплекс работ", descr: "Мы проводим весь необходимый комплекс работ для каждого объекта. Это гарантирует 100% прохождение экспертизы"},
    {title: "Команда профессионалов", descr: "В нашей профессиональной команде 13 высококвалифицированных специалистов"},
    {title: "Отвечаем быстро", descr: "Мы даем быстрый ответ на ваше обращение. Обычно в течение часа"},
    {title: "Огромный опыт", descr: "Мы обладаем огромным опытом и собственной уникальной базой пройденных скважин. Это позволяет нам предвидеть проблемы"},
]

export default function Section7(){


    return(
        <>
            <section className="page1_section7">
                <div className="page1_section7_inside">
                    <h1>ВЫСОКИЙ УРОВЕНЬ И ПРОФЕССИОНАЛЬНАЯ КОМАНДА</h1>
                    <div className="page1_section7_inside_bottom">
                        <p className="p_question">Подтверждение наших компетенций в специализации</p>
                        <div className="page1_section7_inside_bottom_points">
                            {points.map((meow) => (
                                <div>
                                    <h2>{meow.title}</h2>
                                    <p>{meow.descr}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}