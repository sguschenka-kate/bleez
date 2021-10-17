import { useState } from 'react';

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
        },
        {
          categoryId: 5,
          category: 'Інше',
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
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                      <a href="/">
                        BLEEZ
                      </a>
                    </div>
                    <div className="navbar">
                        <ul className="navbar__list">

                            <li className="navbar__item navbar__item--top">
                                <ul className="header-links__list">
                                    <li className="header-links__item">
                                      <a className="header-links__link" href="#">
                                        F.A.Q.
                                      </a>
                                    </li>
                                    <li className="header-links__item">
                                      <a className="header-links__link" href="#">
                                        Де придбати
                                      </a>
                                    </li>
                                    <li className="header-links__item">
                                      <a className="header-links__link" href="#">
                                        Політика конфіденційності
                                      </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="navbar__item navbar__item--bottom">
                                <ul className="header-categories__list">

                                {categories.map(el => {
                                    return (
                                    <li key={el.categoryId} className="header-categories__item">
                                        <a href="#" className="header-categories__link header-categories__link--main">{el.category}</a>
                                        <div className="header-categories__links">
                                        {el.subcategories && el.subcategories.map(sub => {
                                            return <a key={sub.subcategoryId} className="header-categories__link" href={sub.title}>
                                            {sub.title}
                                            </a>
                                        })}
                                        </div>
                                    </li>
                                    )
                                })}
                                </ul>

                                <ul className="header-icons__list">
                                    <li className="header-icons__item">
                                    <a href="#" className="header-icons__link">
                                        <i className="material-icons">search</i>
                                    </a>
                                    </li>
                                    <li className="header-icons__item">
                                    <a href="#" className="header-icons__link">
                                        <i className="material-icons">person_outline</i>
                                    </a>
                                    </li>
                                    <li className="header-icons__item">
                                    <a href="#" className="header-icons__link">
                                        <i className="material-icons">favorite_border</i>
                                    </a>
                                    </li>
                                    <li className="header-icons__item">
                                    <a href="#" className="header-icons__link">
                                        <i className="material-icons">shopping_cart</i>
                                    </a>
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