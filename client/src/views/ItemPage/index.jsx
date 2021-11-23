import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {Card} from '../../components/Card'
import { fetchService } from "../../api/fetchService"
import { ImageSlider } from "../../components/ImageSlider"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.scss'


function ItemPage() {
    const dispatch = useDispatch()
    const item = useSelector(state => state.items.item)

    const [similarItems] = useState([
        {id: 1, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 2, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 3, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 4, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
    ])

    // const [activeOption, setActiveOption] = useState({
    //     size: 's',
    //     color: 'red',
    // })

    const {id} = useParams()

    useEffect(()=>{
        async function fetchItemData(itemId) {
            const item = await fetchService.fetchItem(itemId)
            dispatch({
                type: 'FETCH_ITEM',
                payload: item
            })
            document.title = item.title
        }
        fetchItemData(id)
    }, [id, dispatch])

    return (
        <>
        {!!item && Object.keys(item).length > 0 &&
        
        <>
            <section className="item-page__container box-shadow">
                <div className="item-page__slider">
                    <ImageSlider images={item.images} />
                </div>
                <div className="item-page__info-container">
                    <h1 className="item-page__title">{item.title}</h1>
                    <p className="item-page__description">{item.description}</p>
                    <p className="item-page__structure">{item.structure}</p>
                    <div className="item-page__price">{item.price} ₴</div>
                    <div className="item-page__options-container">
                        <span className="item-page__options-title">
                            Розмір
                        </span>
                        <ul className="item-page__options-list">
                            {/* {Object.keys(item.sizes).map(size => {
                                return (
                                    <li key={size} className="item-page__option">
                                        <button
                                            className={`item-page__option-button ${activeOption.size === size ? "item-page__option-button--active" : ''}`}
                                            onClick={() => setActiveOption({...activeOption, size })}
                                        >
                                            {item.sizes[size]}
                                        </button>
                                    </li>
                                )
                            })} */}
                        </ul>
                    </div>
                    <div className="item-page__options-container">
                        <span className="item-page__options-title">
                            Колір
                        </span>
                        <ul className="item-page__options-list">
                            {/* {item.colors.map(color => {
                                return (
                                    <li key={color} className="item-page__option">
                                        <button
                                            className={`item-page__option-button ${activeOption.color === color && "item-page__option-button--active"}`}
                                            onClick={() => setActiveOption({...activeOption, color })}
                                        >
                                            {color}
                                        </button>
                                    </li>
                                )
                            })} */}
                        </ul>
                    </div>

                    <button className="button-primary item-page__button">ДОДАТИ У КОШИК</button>
                </div>
            </section>
            <div className="similar item-page--similar">
                <h2 className="similar__title">Схожі товари</h2>
                <ul className="similar__list">
                   {similarItems.map(item => {
                       return <Card key={item.id} item={item}></Card>
                   })} 
                </ul>
            </div>
        </>}
        </>
    )
}

export {
    ItemPage
}