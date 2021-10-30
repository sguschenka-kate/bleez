import { useEffect, useState } from "react"
import Slider from "react-slick"
import {Card} from '../../components/Card'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.scss'


function ItemPage() {
    const [item] = useState({
        id: 5,
        title: 'Теплий набір Lozi',
        imgUrls: {1: '/images/socks.jpg', 2: '/images/socks.jpg', 3: '/images/socks.jpg', 4: '/images/socks.jpg',},
        description: 'Відомі архітектори: Ле Корбюзьє, Луїс Барраґан, Заха Хадід, Вальтер Ґропіус, Іван Левинський. Набір з п’яти пар шкарпеток в подарунковій коробці.',
        structure: 'Склад: 95% бавовна, 5% еластан.',
        price: 250,
        sizes: {
            s: '36-38',
            m: '39-41',
            l: '42-43',
            xl: '44-46'
        },
        colors: ['red', 'white', 'rose'],
    })

    const [similarItems] = useState([
        {id: 1, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 2, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 3, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
        {id: 4, title: 'Теплий набір Lozi', img: 'images/socks.jpg', price: 250},
    ])

    const [activeOption, setActiveOption] = useState({
        size: 's',
        color: 'red',
    })

    const [sliderSettings] = useState({
        customPaging: function(i) {
            return (
              <a>
                <img className="item-page__slider-image" src={`/images/socks.jpg`} />
              </a>
            );
          },
          dots: true,
          arrows: false,
          draggable: false,
          dotsClass: "slick-dots slick-thumb",
          slidesToShow: 1,
          slidesToScroll: 1
    })

    const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')

    const handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setBackgroundPosition(`${x}% ${y}%`)
    }

    useEffect(()=> {
        document.title = item.title
    }, [item.title])

    return (
        <>
            <section className="item-page__container box-shadow">
                <div className="item-page__slider">
                    <Slider className="item-page__slider" {...sliderSettings}>
                        {Object.keys(item.imgUrls).map(key => {
                            return (
                                <div key={key}>
                                    <figure
                                        style={{backgroundImage: `url(${item.imgUrls[key]})`, backgroundPosition: backgroundPosition}}
                                        onMouseMove={(e) => handleMouseMove(e)}
                                        className="item-page__figure"
                                    >
                                        <img
                                            src={item.imgUrls[key]}
                                            className="item-page__image"
                                            alt={item.title} />
                                    </figure>
                                </div>
                            )
                        })}
                    </Slider>
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
                            {Object.keys(item.sizes).map(size => {
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
                            })}
                        </ul>
                    </div>
                    <div className="item-page__options-container">
                        <span className="item-page__options-title">
                            Колір
                        </span>
                        <ul className="item-page__options-list">
                            {item.colors.map(color => {
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
                            })}
                        </ul>
                    </div>

                    <button className="button-primary item-page__button">ДОДАТИ У КОШИК</button>
                </div>
            </section>
            <div className="similar item-page--similar">
                <h2 className="similar__title">Схожі товари</h2>
                <ul className="similar__list">
                   {similarItems.map(item => {
                       return (
                           <Card key={item.id} card={item}></Card>
                       )
                   })} 
                </ul>
            </div>
        </>
    )
}

export {
    ItemPage
}