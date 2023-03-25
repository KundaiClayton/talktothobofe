import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay]);

const data = [
  {
    image: "https://source.unsplash.com/1yG1X9cRe2E/800x600",
    caption: "May 1, 2022",
    location: "Central Park, New York City",
    description: "A beautiful day for a stroll in Central Park.",
  },
  {
    image: "https://source.unsplash.com/LTVCX9q3xq8/800x600",
    caption: "July 4, 2022",
    location: "Grand Canyon, Arizona",
    description: "The Grand Canyon is truly awe-inspiring.",
  },
  {
    image: "https://source.unsplash.com/mEZ3PoFGs_k/800x600",
    caption: "October 31, 2022",
    location: "Salem, Massachusetts",
    description: "A spooky Halloween in Salem.",
  },
];

const Carousel = () => {
  return (
    <Swiper autoplay={{ delay: 3000 }} className="my-4 sm:w-full ">
      {data.map(({ image, caption, location, description }) => (
        <SwiperSlide key={caption}>
          <div className="sm:px-16  p-4">
            <img
              src={image}
              alt={caption}
              className="w-full  sm:h-72 object-cover object-center"
            />
            <div className="p-4 flex flex-col">
              <p className="text-gray-600 text-lg sm:text-2xl">{description}</p>
              <div className="flex justify-center ">
                <div className="flex items-center mb-2 ">
                  <FaCalendarAlt className="mr-2 h-24" />
                  <p className="text-sm text-gray-500 mt-4 font-bold">
                    {caption}
                  </p>
                </div>
                <div className="flex items-center mb-2 mx-4">
                  <FaMapMarkerAlt className="mr-2" />
                  <h2 className="text-sm text-gray-500 font-bold">
                    {location}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
