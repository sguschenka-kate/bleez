import { Link } from 'react-router-dom'
import './style.scss'

function Card({item, className}) {
    return (
        <li className={`card ${className || ''}`}>
            <Link to={`/shop/${item.id}`}>
                <div className="card__container">
                    <div className="card__image-container">
                        <img src="/images/socks.jpg" alt={item.title} className="card__image" />
                    </div>

                    <div className="card__info-container">
                        <div className="card__title">
                            {item.title}
                        </div>
                        
                        <div className="card__price">
                            {item.price} ₴
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