import "./Home.scss";
import Slider from "../../components/slider/Slider";

import HomeInfoBox from "./HomeInfoBox";
import { productData } from "../../components/carousel/Data";
import CarouselItem from "../../components/carousel/CarouselItem";
import ProductCarousel from "../../components/carousel/Carousel";
import ProductCategory from "./ProductCategory";
import FooterLinks from "../../components/footer/FooterLinks";

const PageHeading = ({ heading, btnText }) => {
  return (
    <div>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </div>
  );
};

const Home = () => {
  const productss = productData.map((itme, index) => (
    <div key={index}>
      <CarouselItem
        name={itme.name}
        description={itme.description}
        imageurl={itme.imageurl}
        price={itme.price}
      />
    </div>
  ));
  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest Product"} btnText={"Shop Now >>>"} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <section className="--bg-grey category-section">
        <div className="container">
          <h4>Categories</h4>
          <ProductCategory />
        </div>
      </section>

      <section>
        <div className="container">
          <PageHeading heading={"Mobile Phones"} btnText={"Shop Now >>>"} />
          <ProductCarousel products={productss} />
        </div>
      </section>
      <FooterLinks />
    </>
  );
};

export default Home;
