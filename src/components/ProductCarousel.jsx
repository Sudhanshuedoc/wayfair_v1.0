import styles from "./productcarousel.module.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const productData = [
  {
    image:
      "https://assets.wfcdn.com/im/16574313/resize-h400-w400%5Ecompr-r85/2401/240134895/default_name.jpg",
    name: "Manhattan Bathroom Floor Storage Cabinet, Bathroom Cabinet Freestanding, with 4 Drawers, Adjustable Shelf",
    price: "$120.99",
    originalPrice: "$90.99",
  },
  {
    image:
      "https://assets.wfcdn.com/im/58318706/resize-h400-w400%5Ecompr-r85/2067/206772575/default_name.jpg",
    name: "Azani Freestanding Bathroom Cabinet",
    price: "$77.99",
    originalPrice: "$220.89",
  },
  {
    image:
      "https://assets.wfcdn.com/im/96554215/resize-h400-w400%5Ecompr-r85/1443/144321241/default_name.jpg",
    name: "Jalieah 22 W x 32 H x 11.8 D Free-Standing Bathroom Cabinet with 4 Drawers and Adjustable Shelf",
    price: "$60.99",
    originalPrice: "$90.99",
  },
  {
    image:
      "https://assets.wfcdn.com/im/23509013/resize-h400-w400%5Ecompr-r85/3223/32233690/default_name.jpg",
    name: "Bathroom Floor Storage Cabinet, Bathroom Storage Unit, Freestanding Cabinet With 4 Doors",
    price: "$179.99",
    originalPrice: "$90.99",
  },
  {
    image:
      "https://assets.wfcdn.com/im/95519067/resize-h400-w400%5Ecompr-r85/3110/311017780/default_name.jpg",
    name: "Bathroom Floor Storage Cabinet, Bathroom Storage Unit, Freestanding Cabinet With 4 Doors",
    price: "$50.99",
    originalPrice: "$90.99",
  },
  {
    image:
      "https://assets.wfcdn.com/im/96487119/resize-h400-w400%5Ecompr-r85/2562/256209938/default_name.jpg",
    name: "Bathroom Floor Storage Cabinet, Bathroom Storage Unit, Freestanding Cabinet With 4 Doors",
    price: "$74.99",
    originalPrice: "$90.99",
  },
  {
    image:
      "https://assets.wfcdn.com/im/40864604/resize-h400-w400%5Ecompr-r85/6101/61012092/default_name.jpg",
    name: "Bathroom Floor Storage Cabinet, Bathroom Storage Unit, Freestanding Cabinet With 4 Doors",
    price: "$98.99",
    originalPrice: "$90.99",
  },
  {
    image:
      "https://assets.wfcdn.com/im/53231598/resize-h400-w400%5Ecompr-r85/2729/272991658/default_name.jpg",
    name: "Bathroom Floor Storage Cabinet, Bathroom Storage Unit, Freestanding Cabinet With 4 Doors",
    price: "$147.99",
    originalPrice: "$90.99",
  },
];
const ProductCarousel = () => {
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
          left: "15px",
          zIndex: "1",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div id={styles.parent}>
        <div id={styles.child}>
          <Slider {...settings}>
            {productData.map((ele) => (
              <div key={ele.image} id={styles.product}>
                <div id={styles.image}>
                  <img src={ele.image} alt="" />
                </div>
                <div id={styles.pricing}>
                  <h1>{ele.name.slice(0, 30)}...</h1> <br />
                  <p>
                    <span
                      id={styles.price}
                      style={{
                        color:
                          parseFloat(ele.price.replace("$", "")) > 70
                            ? "brown"
                            : "black",
                      }}
                    >
                      {ele.price}
                    </span>

                    <span
                      style={{
                        textDecoration: "line-through",
                        fontSize: "1em",
                      }}
                    >
                      {ele.originalPrice}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <br />
    </>
  );
};

export default ProductCarousel;
