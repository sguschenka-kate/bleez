import { useState } from "react"
import Slider from "react-slick"

function ImageSlider({images}) {
    const [sliderSettings] = useState({
        customPaging: function(i) {
            return (
              <a>
                <img className="item-page__slider-image" alt={i.alt} src={i.path} />
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

    return (
        <Slider className="item-page__slider" {...sliderSettings}>
            {images.map(image => {
                return (
                    <div key={image.itemId}>
                        <figure
                            style={{backgroundImage: `url(${image.path})`, backgroundPosition: backgroundPosition}}
                            onMouseMove={(e) => handleMouseMove(e)}
                            className="item-page__figure"
                        >
                            <img
                                src={image.path}
                                className="item-page__image"
                                alt={images.alt} />
                        </figure>
                    </div>
                )
            })}
        </Slider>
    )
}

export {
    ImageSlider
}