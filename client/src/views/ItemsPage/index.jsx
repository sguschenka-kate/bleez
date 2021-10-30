import { useState } from 'react'
import {Card} from '../../components/Card'
import './style.scss'

function ItemsPage() {
    const [items] = useState([
        {id: 1, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 2, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 3, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 4, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 5, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 6, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 7, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 8, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 9, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
    ])
    return (
        <ul className="items-page__list">
            {items.map(card => {
                return (
                    <Card className="items-page__card" key={card.id} card={card}></Card>
                )
            })}
        </ul>
    )
}

export {
    ItemsPage
}