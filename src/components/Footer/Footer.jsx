import "./Footer.scss"
import { Photo } from "../../Images.js"
import { Link } from "react-router-dom"


export default function Footer(){

    return(
        <>
            <footer>
                <div className="footer_inside">
                    <div className="footer_inside_top">
                        <div className="footer_inside_top_first">
                            <button><img src={Photo.LogoFooter} alt="" /></button>
                            <p>Инженерные изыскания в строительстве</p>
                            <div><img src={Photo.Phone} alt="" /><p>+7 (495) 755-02-29</p></div>
                        </div>
                        <div className="footer_inside_top_second">
                            <div>
                                <Link to="/projects">Проекты</Link>
                                <Link to="/about">О нас</Link>
                                <Link to="/">Услуги</Link>
                            </div>
                            <div id="footer_links_central">
                                <Link to="/">Цены</Link>
                                <Link to="/">Статьи</Link>
                                <Link to="/">Вакансии</Link>
                            </div>
                            <div>
                                <Link to="/">Контакты</Link>
                            </div>
                        </div>
                        <div className="footer_inside_top_third">
                            <button onClick={() => window.open('https://facebook.com', '_blank')}><img src={Photo.FacebookLogo} alt="" /></button>
                            <button onClick={() => window.open('https://vk.ru', '_blank')}><img src={Photo.VKLogo} alt="" /></button>
                            <button onClick={() => window.open('https://instagram.com', '_blank')}><img src={Photo.InstagramLogo} alt="" /></button>
                        </div>
                    </div>
                    <div className="footer_inside_bot">
                        <p>НОЭКС. Все права защищены 2021©. Инженерные изыскания с 1999 года.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}