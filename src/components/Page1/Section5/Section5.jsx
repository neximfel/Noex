import "./Section5.scss"
import { Photo } from "../../../Images.js"
import { useState } from "react"

const steps = [
    {number: "1", title: "Подготовка", descr: "В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор"},
    {number: "2", title: "Организация", descr: "Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida."},
    {number: "3", title: "Проведение изысканий", descr: "Maecenas aliquet condimentum mi, et elementum arcu vestibulum a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur maximus tempor. "},
    {number: "4", title: "Экспертиза", descr: "Aenean sit amet magna at ligula tempor consequat vitae nec justo. Quisque augue lorem, porta non urna ac, mollis fringilla justo. Duis non placerat odio, cursus molestie urna. Donec feugiat aliquet sapien sit amet volutpat. "},
]

export default function Section5(){

    const numbers = 4;

    const [isCurrent, setIsCurrent] = useState(0)
    const goPrev = () => {
        setIsCurrent((prev) => (prev === 0 ? numbers - 1 : prev - 1))
    }
    const goNext = () => {
        setIsCurrent((next) => (next === numbers - 1 ? 0 : next + 1))
    }

    const currentStep = steps[isCurrent]

    return(
        <>
            <section className="page1_section5">
                <div className="page1_section5_inside">
                    <h1>КАК МЫ РАБОТАЕМ</h1>
                    <div className="page1_section5_inside_bottom">
                        <div className="page1_section5_inside_bottom_left">
                            {steps.map((meow, index) => (
                                <button
                                    key={index}
                                    onClick={() => setIsCurrent(index)}
                                    className={isCurrent === index ? "marked" : ""}
                                >
                                    <div><h3>{meow.number}</h3></div>
                                    <p>{meow.title}</p>
                                </button>
                            ))}
                        </div>
                        <div className="page1_section5_inside_bottom_right">
                            <div className="page1_section5_inside_bottom_right_text">
                                <h2>{currentStep.title}</h2>
                                <p>{currentStep.descr}</p>
                            </div>
                            <div className="page1_section5_inside_bottom_right_arrows">
                                <button onClick={goPrev} id="left_arrow"><img src={Photo.ArrowToLeft} alt="" /></button>
                                <button onClick={goNext} id="right_arrow"><img src={Photo.ArrowToRight} alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}