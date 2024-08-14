import Button from "../../../Component/Button/Button";
import bannerImg from "../../../assets/Banner.png";

const Banner = () => {
  return (
    <div className="hero bg-pink-50 mb-20">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
        <div className="col-span-1">
          <h1 className="text-5xl font-bold">
            BEAUTY SALON <br />
            FOR EVERY WOMEN
          </h1>
          <p className="py-6 max-w-sm">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button label="Get an Appointment"></Button>
        </div>
        <img src={bannerImg} className="rounded-lg col-span-1" />
      </div>
    </div>
  );
};

export default Banner;
