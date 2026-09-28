import "./Section4.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const questions = [
    {title: "Подготовка", descr: "В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор"},
    {title: "Организация", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, lorem sed pulvinar consequat, sem dui pellentesque dolor, et consequat lacus nisl a arcu. Duis ut arcu non nunc feugiat iaculis ac et magna. Praesent non enim nec nibh imperdiet. "},
    {title: "Проведение изысканий", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, nibh sit amet pharetra rutrum. "},
    {title: "Экспертиза", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum, sapien a posuere posuere, odio magna tincidunt mauris, sit amet imperdiet mi leo nec ligula. "},
]

export default function Section4(){

    const [isOpen, setIsOpen] = useState(0)

    const toggleQuestion = (que) => {
        setIsOpen((prev) => (prev === que ? null : que))
    }

    return(
        <>
            <section className="page3_section4">
                <div className="page3_section4_inside">
                    <p className="p_question">Как мы работаем</p>
                    <div className="page3_section4_inside_right">
                        <div className="page3_section4_inside_right_title">
                            <h2>МЫ ПРЕДПОЧИТАЕМ РАБОТАТЬ ПО ПОНЯТНОЙ СХЕМЕ</h2>
                        </div>
                        <div className="page3_section4_inside_right_questions">
                            {questions.map((meow, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <div>
                                        <img src={isOpen === index ? Photo.Minus : Photo.Plus} alt="" className={isOpen === index ? "rotated" : ""}/>
                                        <h2>{meow.title}</h2>
                                    </div>
                                    {/* <p className={isOpen === index ? "opened" : ""}>{meow.descr}</p> */}
                                    {isOpen === index && <p>{meow.descr}</p>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}