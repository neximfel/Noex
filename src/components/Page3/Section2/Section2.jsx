import "./Section2.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

export default function Section2(){

    return(
        <>
            <section className="page3_section2">
                <div className="page3_section2_inside">
                    <p className="p_question">Мы обеспечиваем качество реализации проекта</p>
                    <div className="page3_section2_inside_right">
                        <p>Для реализации Вашего проекта, будь то строительство коттеджа или масштабного архитектурного сооружения, необходимы качественные инженерные изыскания. Геологические, экологические и климатические условия уникальны для каждой местности. Они способны повлиять на Ваш проект. Для изучения этих условий и прогноза возможных последствий необходимо изучить и предвидеть все возможные факторы.</p>
                        <div>
                            <img src={Photo.Image1} alt="" />
                            <img src={Photo.Image2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}