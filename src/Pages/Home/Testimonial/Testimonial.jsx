import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import Slider from "react-slick";
import "@smastrom/react-rating/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="px-20 mb-20">
      <h2 className="font-bold text-4xl text-center mb-16">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="p-4">
            <div className="card shadow-xl">
              <div className="card-body">
                <div className="flex gap-5">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={testimonial.img} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-md font-bold">{testimonial.name}</h2>
                    <h2 className="text-md">{testimonial.designation}</h2>
                  </div>
                </div>
                <p>{testimonial.testimonial}</p>
                <div className="card-actions justify-start">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={testimonial.rating}
                    onChange={setRating}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
