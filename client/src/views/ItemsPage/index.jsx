import { useEffect, useState } from 'react'
import {Card} from '../../components/Card'
import './style.scss'

function ItemsPage() {
    const [items] = useState([])

    useEffect(() => {

    }, [])
    
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