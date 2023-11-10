import Slider from "react-slick";
import "./Carousel.css"

function Carousel({ children }) {

    const settings = {
        dots: false,
        infinite: false, // true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        // slidesToShow: 5,
        slidesToScroll: 4   
    };

    return (
        <>
            <Slider {...settings}>
                { children }
            </Slider>
        </>
    )
}

export default Carousel
