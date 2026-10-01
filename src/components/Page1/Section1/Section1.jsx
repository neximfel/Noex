import "./Section1.scss"
import React, { useRef, useState } from 'react';
import { Photo } from "../../../Images.js"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const bg = [
    {
        title: "ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ",
        bg_img: Photo.BackgroundImage1,
        descr: "С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.",
        button1: "ПОСМОТРЕТЬ УСЛУГИ",
        button2: "НАШИ ПРОЕКТЫ",
        ad_text: "Выполняем инженерные изыскания в строительстве с 1988 года"
    },
    {
        title: "ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ",
        bg_img: Photo.BackgroundImage2,
        descr: "",
        button1: "ПОДРОБНЕЕ",
        button2: "ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК",
        ad_text: ""
    },
]

export default function Section1(){

    const [activeDot, setActiveDot] = useState(0)
    const [swiperRef, setSwiperRef] = useState(null)

    const totalSlides = 4;

    const goPrev = () => {
        setActiveDot((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }
    const goNext = () => {
        setActiveDot((next) => (next === totalSlides - 1 ? 0 : next + 1))
    }

    const params = {
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
        }
    }
    
    return(
        <>
            <Swiper
                params
                rewind = {true}
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
                navigation = {true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                
            >
                <SwiperSlide className="slide1">
                    <section className="page1_section1">
                        <div className="page1_section1_inside">
                            <div className="page1_section1_inside_top">
                                <div className="page1_section1_inside_top_first">
                                    <h1>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ</h1>
                                    <p>С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.</p>
                                </div>
                                <div className="page1_section1_inside_top_second">
                                    <div className="page1_section1_inside_top_second_buttons">
                                        <Link to="/empty" className="button__look">ПОСМОТРЕТЬ УСЛУГИ</Link>
                                        <Link to="/projects" className="button__our_projects">НАШИ ПРОЕКТЫ</Link>
                                    </div>
                                    <p>Выполняем инженерные изыскания в строительстве с 1988 года</p>
                                </div>
                            </div>
                            <div className="page1_section1_inside_bot">
                                <div className="page1_section1_inside_bot_left">
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
                                <div className="page1_section1_inside_bot_right">
                                    <div className="page1_section1_inside_bot_right_arrows">
                                        <button onClick={goPrev} className="custom-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="custom-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="slide2">
                    <section className="page1_section1">
                        <div className="page1_section1_inside">
                            <div className="page1_section1_inside_top">
                                <div className="page1_section1_inside_top_first">
                                    <h1>ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ</h1>
                                    <div className="page1_section1_inside_top_first_punkts">
                                        <div>
                                            <h3>Бурение инженерно-геологических скважин</h3>
                                            <p>от 600₽ / п.м</p>
                                        </div>
                                        <div>
                                            <h3>Штамповые испытания грунтов</h3>
                                            <p>от 18 000₽ / опыт</p>
                                        </div>
                                        <div>
                                            <h3>Лабораторные испытания со скидкой от 50% (с понижающим коэффициентом от 0.5)</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="page1_section1_inside_top_second">
                                    <div className="page1_section1_inside_top_second_buttons">
                                        <Link to="/empty" className="button__look">ПОДРОБНЕЕ</Link>
                                        <Link to="/projects" className="button__our_projects">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="page1_section1_inside_bot">
                                <div className="page1_section1_inside_bot_left">
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
                                <div className="page1_section1_inside_bot_right">
                                    <div className="page1_section1_inside_bot_right_arrows">
                                        <button onClick={goPrev} className="custom-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="custom-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="slide3">
                    <section className="page1_section1">
                        <div className="page1_section1_inside">
                            <div className="page1_section1_inside_top">
                                <div className="page1_section1_inside_top_first">
                                    <h1>ЭКОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ</h1>
                                    <div className="page1_section1_inside_top_first_punkts_grid">
                                        <p>Комплекс инженерно-экологических изысканий:</p>
                                        <div className="page1_section1_inside_top_first_punkts_grid_container">
                                            <div>
                                                <p>0.5 Га</p>
                                                <span></span>
                                                <p className="yellow_p">от 50 000₽</p>
                                            </div>
                                            <div>
                                                <p>1.0 Га</p>
                                                <span></span>
                                                <p className="yellow_p">от 70 000₽</p>
                                            </div>
                                            <div>
                                                <p>2.0 Га</p>
                                                <span></span>
                                                <p className="yellow_p">от 90 000₽</p>
                                            </div>
                                            <div>
                                                <p>3.0 Га</p>
                                                <span></span>
                                                <p className="yellow_p">от 110 000₽</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page1_section1_inside_top_second">
                                    <div className="page1_section1_inside_top_second_buttons">
                                        <Link to="/empty" className="button__look">ПОДРОБНЕЕ</Link>
                                        <Link to="/projects" className="button__our_projects">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="page1_section1_inside_bot">
                                <div className="page1_section1_inside_bot_left">
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
                                <div className="page1_section1_inside_bot_right">
                                    <div className="page1_section1_inside_bot_right_arrows">
                                        <button onClick={goPrev} className="custom-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="custom-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="slide4">
                    <section className="page1_section1">
                        <div className="page1_section1_inside">
                            <div className="page1_section1_inside_top">
                                <div className="page1_section1_inside_top_first">
                                    <h1>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ</h1>
                                    <div className="page1_section1_inside_top_first_punkts">
                                        <div>
                                            <h3>Создание инженерно-топографических планов масштаба 1:500, рельеф 0.5 метра на незастроенной территории</h3>
                                            <p>от 10 000₽ / Га</p>
                                        </div>
                                        <div>
                                            <h3>Создание опорных геодезических сетей</h3>
                                            <p>от 50 000₽ / пункт</p>
                                        </div>
                                        <div>
                                            <h3>Дендрологические исследования</h3>
                                            <p>от 40 000₽</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="page1_section1_inside_top_second">
                                    <div className="page1_section1_inside_top_second_buttons">
                                        <Link to="/empty" className="button__look">ПОДРОБНЕЕ</Link>
                                        <Link to="/projects" className="button__our_projects">ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="page1_section1_inside_bot">
                                <div className="page1_section1_inside_bot_left">
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
                                <div className="page1_section1_inside_bot_right">
                                    <div className="page1_section1_inside_bot_right_arrows">
                                        <button onClick={goPrev} className="custom-prev"><img src={Photo.ArrowToLeft} alt="" /></button>
                                        <button onClick={goNext} className="custom-next"><img src={Photo.ArrowToRight} alt="" /></button>
                                    </div>
                                    <span> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <div className=""></div>
                <div className=""></div>
            </Swiper>
        </>
    )
}