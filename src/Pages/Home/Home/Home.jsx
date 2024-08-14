import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Service></Service>
      <Advertise></Advertise>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
};

export default Home;
