import {Link} from 'react-router-dom'
import './style.scss'

function ContactPage() {
    return (
        <>
            <h1 className="visually-hidden">Сторінка контактів</h1>
            <p className="contacts__text-with-shadow box-shadow">Придбати продукцію Dodo Socks можна на сайті dodosocks.com. Онлайн замовлення опрацьовується впродовж 1-3 робочих днів з дня оформлення. Відправлення замовлень здійснюється у робочі дні з понеділка по п’ятницю. Детальніше про оплату та доставку можна прочитати в <Link to="/faq">розділі FAQ</Link>.</p>
            <p>Придбати шкарпетки Dodo Socks можна також у фірмових крамничках Dodo Socks у Львові та Києві.</p>
            <h2>Тернопіль</h2>
            <p>Крамничка Bleez в Тернополі: вул. Антоновича 19/21. Чекаємо на вас щоденно з 12 по 21 годину. Телефон крамнички: +38 063 818 27 37.</p>
            <img src="images/contacts2.jpg" className="contacts__image" alt="Bleez Shop In Ternopil" />
        </>
    )
}

export {
    ContactPage
}