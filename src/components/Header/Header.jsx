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
                        <Link to="">Услуги</Link>
                        <Link to="">Цены</Link>
                        <Link to="">Статьи</Link>
                        <Link to="">Вакансии</Link>
                        <Link to="">Контакты</Link>
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