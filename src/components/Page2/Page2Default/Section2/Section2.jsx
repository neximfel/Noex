import "./Section2.scss"
import { Photo } from "../../../../Images.js"
import { use, useState } from "react"
import { Link } from "react-router-dom"

const years = [
    {title: "За все время", from: 0, to: 9999},
    {title: "2010-2020", from: 2010, to: 2020},
    {title: "2000-2010", from: 2000, to: 2010},
    {title: "1990-2000", from: 1990, to: 2000},
]
const places = [
    {year: "1993-2015", from: 1993, to: 2015, img: Photo.DefPlace1, link: "/projects_ope1",title: "Москва-Сити", text: "Оказание полного спектра услуг на двенадцати основных объектах комплекса «Москва сити"},
    {year: "2013-2014", from: 2013, to: 2014, img: Photo.DefPlace2, link: "/projects_ope2",title: "АТК на Кутузовском", text: "Актуализация инженерно-геологических изысканий на участке строительства административно-торгового комплекса"},
    {year: "2012", from: 2012, to: 2012, img: Photo.DefPlace3, link: "/projects_ope3",title: "Завод ЗИЛ", text: "Реконструкция легендарного автогиганта, завода «ЗИЛ» Бурение инженерно-геологических скеважин до глубины 70 м, геофизические исследования"},
    {year: "2012-2013", from: 2012, to: 2013, img: Photo.DefPlace4, link: "/projects_ope4",title: "Станция Окская", text: "Бурение, геофизический каротаж, грунтовые и штамповые испытания, оборудование скважин, опытно-фильтрационные работы, лабораторные исследования, моделирование"},
    {year: "2010-2011", from: 2010, to: 2011, img: Photo.DefPlace5, link: "/projects_ope5",title: "ТРК Авиапарк", text: "Бурение, испытания грунтов методами статического зондирования, штамповые испытания, лабораторные исследования"},
    {year: "2007-2010", from: 2007, to: 2010, img: Photo.DefPlace6, link: "/projects_ope6",title: "Стадион Спартак", text: "Инженерно-геологические изыскания, в результате которых приняты и воплощаются в жизнь оригинальные архитектурные и инженерные решения"},
]

export default function Section2(){

    const [isActive, setIsActive] = useState(0)

    
    const filtered = places.filter((meow) => {
        const isCorrect = years[isActive].from <= meow.to && meow.from <= years[isActive].to
        return isCorrect
    })
    

    return(
        <>
            <section className="page2_def_section2">
                <div className="page2_def_section2_inside">
                    <div className="page2_def_section2_inside_years">
                        {years.map((meow, index) => (
                            <button
                                key={index}
                                className={isActive === index ? "current" : ""}
                                onClick={() => setIsActive(index)}
                            >
                                {meow.title}
                            </button>
                        ))}
                    </div>
                    <div className="page2_def_section2_inside_places">
                        {filtered.map((meow, index) => (
                            <article key={index}>
                                <p className="p_year">{meow.year}</p>
                                <img src={meow.img} alt="" />
                                <div className="section2_article_right">
                                    <div>
                                        <h2>{meow.title}</h2>
                                        <p>{meow.text}</p>
                                    </div>
                                    <Link to={meow.link}>ПОДРОБНЕЕ</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}