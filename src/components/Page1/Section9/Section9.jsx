import "./Section9.scss"
import { Photo } from "../../../Images.js"


export default function Section9(){


    return(
        <>
            <section className="page1_section9">
                <div className="page1_section9_inside">
                    <h1>НЕОБХОДИМО РАСЧИТАТЬ СМЕТУ?</h1>
                    <div className="page1_section9_inside_bottom">
                        <div className="page1_section9_inside_bottom_left">
                            <div className="page1_section9_inside_bottom_left_number">
                                <p>Номер телефона</p>
                                <p>Не заполнено</p>
                            </div>
                            <div className="page1_section9_inside_bottom_left_tech">
                                <p>Загрузите техническое задание (если есть)</p>
                                <p>DOC, DOCX, TXT, OFC</p>
                            </div>
                        </div>
                        <div className="page1_section9_inside_bottom_right">
                            <input type="text" placeholder="+7 (---) --- -- --"/>
                            <div className="page1_section9_inside_bottom_right_file">
                                <button className="page1_section9_inside_bottom_right_file_title">
                                    <img src={Photo.DownloadImage} alt="" />
                                    <p>Загрузить файл</p>
                                </button>
                                <div className="page1_section9_inside_bottom_right_file_files">
                                    <span>
                                        <p>ТЗ_Технониколь.doc</p>
                                        <img src={Photo.DeleteImage} alt="" />
                                    </span>
                                    <span>
                                        <p>ТЗ-2_Технониколь.doc</p>
                                        <img src={Photo.DeleteImage} alt="" />
                                    </span>
                                </div>
                                <button id="raschet">РАССЧИТАТЬ СМЕТУ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}