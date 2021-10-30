import { Link } from 'react-router-dom'
import './style.scss'

function Card({card, className}) {



    return (
        <li className={`card ${className || ''}`}>
            <Link key={card.id} to={`/shop/${card.id}`}>
                <div className="card__container">
                    <div className="card__image-container">
                        <img src="/images/socks.jpg" alt={card.title} className="card__image" />
                    </div>

                    <div className="card__info-container">
                        <div className="card__title">
                            {card.title}
                        </div>
                        
                        <div className="card__price">
                            {card.price} ₴
                        </div>

                        <button className="button-secondary card__button">
                            До кошика
                        </button>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export {
    Card
}