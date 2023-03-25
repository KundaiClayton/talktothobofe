import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const TestimonialSection = ({ testimonials }) => {
  return (
    <section className="py-4 md:py-8 bg-blue-800">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          Testimonials
        </h2>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="flex justify-between bg-blue-800 h-60 items-center p-4 md:p-8  sm:flex-row"
            >
              <div className="flex flex-col justify-center items-center text-center sm:flex-row sm:text-left">
                <div className="w-24 h-24 ">
                  <img
                    src={testimonial.avatar}
                    alt="Avatar"
                    className="h-full w-full object-cover rounded-full "
                  />
                </div>

                <div className="flex flex-col  mx-4 px-4 py-4">
                  <p className="text- text-white mb-2 sm:order-2">
                    {testimonial.name}
                  </p>
                  <p className="text-md text-white  sm:order-1 ">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
