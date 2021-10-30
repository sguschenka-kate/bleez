import { useState } from "react"
import { Link } from 'react-router-dom'
import './style.scss'

function Footer() {
    const [categories] = useState([
        {categoryId: 1, category: 'Жінкам', url: '/women'},
        {categoryId: 2, category: 'Чоловікам', url: '/men'},
        {categoryId: 3, category: 'Дітям', url: '/children'},
        {categoryId: 4, category: 'Подарунки', url: '/gifts'},
        {categoryId: 5, category: 'Інше', url: '/other'},
    ])

    const [links] = useState([
        {linkId: 1, link: 'F.A.Q.', url: '/faq'},
        {linkId: 2, link: 'Контакти', url: '/contacts'},
        {linkId: 3, link: 'Політика конфіденціальності', url: '/privacy'},
    ])

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="subscribe">
                        <p className="subscribe__title">Хочеш дізнатись першим про новинки, акції та спеціальні пропозиції?</p>
                        <form className="subscribe__email-container">
                            <input type="email" className="subscribe__input" placeholder="Email" required />
                            <button type="submit" className="subscribe__button">Підписатися</button>
                        </form>
                        <p className="subscribe__text">Слідкуй за нашими новинами :)</p>
                    </div>
                    <div className="social-media">
                        <p className="social-media__title">Стежте за нами</p>
                        <a className="social-media__link" href="instagram.com/bleez_shop">
                            inst
                        </a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <nav className="nav">
                        <ul className="footer-navbar__list">
                            <li className="footer-navbar__item logo">
                                <Link className="logo--white-color" to="/">
                                    BLEEZ
                                </Link>
                            </li>
                            <li className="footer-navbar__item">
                                <ul className="footer-links__list">

                                {categories.map(el => {
                                    return (
                                    <li key={el.categoryId} className="footer-links__item">
                                        <Link to={el.url} className="footer-links__link">{el.category}</Link>
                                    </li>
                                    )
                                })}
                                </ul>
                            </li>

                            <li className="footer-navbar__item">
                                <ul className="footer-links__list">
                                    {links.map(link => {
                                        return (
                                            <li key={link.linkId} className="footer-links__item">
                                                <Link className="footer-links__link" to={link.url}>
                                                    {link.link}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>

                            <li className="footer-navbar__item">
                                <ul className="footer-links__list">
                                    <li className="footer-links__item">
                                        Електронна пошта для зв'язку: <a className="footer-links__link" href="mailto:hello@bleez.shop">hello@bleez.shop</a>
                                    </li>
                                    <li className="footer-links__item">
                                        <ul>
                                            <li>
                                                Крамничка Bleez у Тернополі на Федорова:
                                            </li>
                                            <li>
                                                вул. Федорова, 2, з 12:00 до 21:00,
                                            </li>
                                            <li>
                                                тел.: +38 063 419 8456
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export {
    Footer
}