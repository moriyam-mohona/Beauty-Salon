import advertiseImg from "../../../assets/Advertise.png";
const Advertise = () => {
  return (
    <div className="hero bg-pink-50 px-20 my-16 py-20">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10">
        <img src={advertiseImg} className="rounded-lg shadow-2xl col-span-1 " />
        <div className="col-span-1">
          <h1 className="text-4xl font-bold">
            Let us handle your <br /> skin
            <span className="text-pink-500"> Professionally.</span>
          </h1>
          <p className="py-6 max-w-md">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <p className="text-pink-500 text-3xl font-bold">500+</p>
              <p className="font-semibold">Happy Customer</p>
            </div>
            <div className="flex flex-col">
              <p className="text-pink-500 text-3xl font-bold">16+</p>
              <p className="font-semibold">Total Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
