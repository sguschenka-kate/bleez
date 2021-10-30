import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

function Header() {


    const [categories] = useState([
        {
          categoryId: 1,
          category: 'Жінкам',
          url: '/women',
          subcategories: [
            {
              subcategoryId: 1,
              title: 'Шкарпетки',
              url: '/women/socks'
            },
            {
              subcategoryId: 2,
              title: 'Білизна',
              url: '/women/underwear'
            },
            {
              subcategoryId: 3,
              title: 'Колготки, панчохи',
              url: '/women/tights'
            },
            {
              subcategoryId: 4,
              title: 'Подарунки',
              url: '/women/gifts'
            },
            {
              subcategoryId: 5,
              title: 'Інше',
              url: '/women/other'
            },
          ] 
        },
        {
          categoryId: 2,
          category: 'Чоловікам',
          url: '/men',
          subcategories: [
            {
              subcategoryId: 1,
              title: 'Шкарпетки',
              url: '/men/socks',
            },
            {
              subcategoryId: 2,
              title: 'Білизна',
              url: '/men/underwear',
            },
            {
              subcategoryId: 4,
              title: 'Подарунки',
              url: '/men/gifts',
            },
            {
              subcategoryId: 5,
              title: 'Інше',
              url: '/men/other',
            },
          ] 
        },
        {
          categoryId: 3,
          category: 'Дітям',
          url: '/children',
          subcategories: [
            {
              subcategoryId: 1,
              title: 'Шкарпетки',
              url: '/children/socks'
            },
            {
              subcategoryId: 2,
              title: 'Білизна',
              url: '/children/underwear'
            },
            {
              subcategoryId: 3,
              title: 'Колготки, панчохи',
              url: '/children/tights'
            },
            {
              subcategoryId: 4,
              title: 'Подарунки',
              url: '/children/gifts'
            },
            {
              subcategoryId: 5,
              title: 'Інше',
              url: '/children/other'
            },
          ] 
        },
        {
          categoryId: 4,
          category: 'Подарунки',
          url: '/gifts'
        },
        {
          categoryId: 5,
          category: 'Інше',
          url: '/other',
          subcategories: [
            {
              subcategoryId: 1,
              title: 'Велокепки',
              url: '/other'
            },
            {
              subcategoryId: 2,
              title: 'Маски',
              url: '/other'
            },
            {
              subcategoryId: 3,
              title: 'Торби',
              url: '/other'
            }
          ] 
        },
      ])

    return (
        <header className="header">
            <div className="header-container">
                <nav className="nav">
                    <div className="logo">
                      <Link to="/">
                        BLEEZ
                      </Link>
                    </div>
                    <div className="navbar">
                        <ul className="navbar__list">

                            <li className="navbar__item navbar__item--top box-shadow">
                              <ul className="header-links__list">
                                  <li className="header-links__item">
                                    <Link className="header-links__link" to="/faq">
                                      F.A.Q.
                                    </Link>
                                  </li>
                                  <li className="header-links__item">
                                    <Link className="header-links__link" to="/contacts">
                                      Контакти
                                    </Link>
                                  </li>
                                  <li className="header-links__item">
                                    <Link className="header-links__link" to="/privacy">
                                      Політика конфіденційності
                                    </Link>
                                  </li>
                              </ul>
                            </li>
                            

                            <li className="navbar__item navbar__item--bottom">
                                <ul className="header-categories__list">

                                {categories.map(el => {
                                    return (
                                    <li key={el.categoryId} className="header-categories__item">
                                      {el.url &&
                                        <>
                                          <Link to={el.url} className="header-categories__link header-categories__link--main">{el.category}</Link>
                                            <div className="header-categories__links">
                                            {el.subcategories && el.subcategories.map(sub => {
                                                return <Link key={sub.subcategoryId} className="header-categories__link" to={sub.url}>
                                                {sub.title}
                                                </Link>
                                            })}
                                            </div>
                                        </>
                                      }
                                        
                                    </li>
                                    )
                                })}
                                </ul>

                                <ul className="header-icons__list">
                                    <li className="header-icons__item">
                                    <Link to="/search" className="header-icons__link">
                                        <i className="material-icons">search</i>
                                    </Link>
                                    </li>
                                    <li className="header-icons__item">
                                    <Link to="/profile" className="header-icons__link">
                                        <i className="material-icons">person_outline</i>
                                    </Link>
                                    </li>
                                    <li className="header-icons__item">
                                    <Link to="/favorites" className="header-icons__link">
                                        <i className="material-icons">favorite_border</i>
                                    </Link>
                                    </li>
                                    <li className="header-icons__item">
                                    <Link to="/cart" className="header-icons__link">
                                        <i className="material-icons">shopping_cart</i>
                                    </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>

            </div>

        </header>
    )
}

export {
    Header
}