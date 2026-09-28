import "./Section6.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"
import { Link } from "react-router-dom"

const certif = [
    {img: Photo.Certificate, title: "Реестр АИИС"},
    {img: Photo.Certificate, title: "Национальный реестр специалистов (1)"},
    {img: Photo.Certificate, title: "Национальный реестр специалистов (2)"},
]

export default function Section6(){

    return(
        <>
            <section className="page3_section6">
                <div className="page3_section6_inside">
                    <div className="page3_section6_inside_top">
                        <p className="p_question">Мы сертифицированная компания</p>
                        <h2>НАШИ СЕРТИФИКАТЫ</h2>
                    </div>
                    <div className="page3_section6_inside_bottom">
                        <div className="page3_section6_inside_bottom_boxes">
                            {certif.map((meow) => (
                                <div className="page3_section6_inside_bottom_boxes_box">
                                    <img src={meow.img} alt="" />
                                    <h2>{meow.title}</h2>
                                    <a href="https://pub.fsa.gov.ru/rss/certificate">Посмотреть в реестре</a>
                                </div>
                            ))}
                        </div>
                        <button>НАШИ УСЛУГИ И ЦЕНЫ <img src={Photo.ArrowDiagonal} alt="" /></button>
                    </div>
                </div>
            </section>
        </>
    )
}