import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero";
import About from "../../components/about/about";
import FunFact from "../../components/FunFact/FunFact";
import Testimonial from "../../components/Testimonial/Testimonial";
import BannerSec from "../../components/BannerSec/BannerSec";
import TeamSection from "../../components/TeamSection/TeamSection";
import PartnerSection from "../../components/PartnerSection";
import RsvpSection from "../../components/RsvpSection/RsvpSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";

const HomePage = (props) => {
  const productsArray = api();

  const addToCartProduct = (product, qty = 1) => {
    props.addToCart(product, qty);
  };

  const addToWishListProduct = (product) => {
    props.addToWishList(product);
  };

  const products = productsArray;

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ServiceSection pbClass={"pt-0"} />
      <FunFact />
      <Testimonial />
      <BannerSec />
      <TeamSection />
      <PartnerSection />
      <RsvpSection rClass={"pt-0"} />
      <BlogSection />
      <Footer />
      <Scrollbar />
    </div>
  );
};
export default connect(null, { addToCart, addToWishList })(HomePage);
