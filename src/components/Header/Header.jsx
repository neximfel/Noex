import "./Header.scss"
import { Photo } from "../../Images.js"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <Link to="/" className="nav_logo"><img src={Photo.Logo} alt="" /></Link>
                    <ul>
                        <Link to="/projects" >Проекты</Link>
                        <Link to="/about">О нас</Link>
                        <Link to="/empty">Услуги</Link>
                        <Link to="/empty">Цены</Link>
                        <Link to="/empty">Статьи</Link>
                        <Link to="/empty">Вакансии</Link>
                        <Link to="/empty">Контакты</Link>
                    </ul>
                    <div>
                        <span></span>
                        <p>+7 (495) 755-02-29</p>
                    </div>
                </nav>
            </header>
        </>
    )
}