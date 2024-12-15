import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "33px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "10px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div>
        <video autoPlay muted loop playsInline>
          <source src="../../wayfair_logo/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <img src="../../wayfair_logo/carousel.png" alt="" />
      </div>
    </Slider>
  );
}
const Carousel = () => {
  return (
    <>
      <div id={styles.parent}>
        <div id={styles.child}>
          <SimpleSlider />
        </div>
      </div>
    </>
  );
};

export default Carousel;
