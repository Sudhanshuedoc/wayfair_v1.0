import "./App.css";
import Carousel from "./components/carousel";
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import DealTitle from "./components/DealTitle";
import ProductCarousel from "./components/ProductCarousel";
import Image from "./components/Image";
import Guestset from "./components/Guestset";
import Christmas from "./components/Christmas";
import Holiday from "./components/Holiday";
import Cards from "./components/Cards";
import Impact from "./components/Impact";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Megamenu from "./components/Megamenu";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Promotion />
      <Navbar />
      <Megamenu />
      <Carousel />
      <DealTitle title="keep shopping for bathroom storage" />
      <ProductCarousel />
      <DealTitle title="shops gifts under $100" />
      <ProductCarousel />
      <DealTitle title="24-hours ONLY: deals of the day" />
      <ProductCarousel />
      <Image source="https://assets.wfcdn.com/im/31332510/resize-h454-w2000%5Ecompr-r85/3087/308717387/save_on_bed_%26_bath._essentials_for_every_host_308717387.jpg" />
      <DealTitle title="get set for guests" />
      <Guestset />
      <DealTitle title="extra 15% off RE/FINE" />
      <ProductCarousel />
      <DealTitle title="quick-ship Christmas picks" />
      <Christmas />
      <Image source="https://assets.wfcdn.com/im/51125420/resize-h454-w2000%5Ecompr-r85/3101/310178923/save_on_christmas_staples._shop_trees_%26_accessories_310178923.jpg" />
      <DealTitle title="holiday magic made affordable" />
      <Holiday />
      <DealTitle title="Christmas trees from $60" />
      <ProductCarousel />
      <Image source="https://assets.wfcdn.com/im/08255542/resize-h454-w2000%5Ecompr-r85/3150/315001927/up_to_40%25_off_creator_picks_save_big_with_weekly_deals.__315001927.jpg" />
      <DealTitle title="creator picks up to 40% off" />
      <ProductCarousel />
      <Image source="https://assets.wfcdn.com/im/67843590/resize-h454-w2000%5Ecompr-r85/3085/308539675/wayfair_rewards_308539675.jpg" />
      <Cards />
      <Image source="https://assets.wfcdn.com/im/90572137/resize-h454-w2000%5Ecompr-r85/3047/304794233/kitchen_essentials_for_less._holiday_prep_made_easy_304794233.jpg" />
      <DealTitle title="what we're doing to make an impact" />
      <Impact />
      <Image source="https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg" />{" "}
      <Subscribe />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
