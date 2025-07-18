import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import greenDhakaImg from "../../../assets/green-dhaka.jpg";
import metupImg from "../../../assets/metup.png";
import donationDriveImg from "../../../assets/eduCare.webp";
import awardEventImg from "../../../assets/volunteer.jpg";
import skillsWorkshopImg from "../../../assets/workshop.jpeg";

const Banner = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: "EduCare Donation Drive",
      subtitle:
        "Donate books, stationery, and hope to underprivileged children.",
      details:
        "Our mission is to collect and distribute educational materials to children in rural areas. Participate by donating, helping us sort and pack kits, or spreading the word. Every small effort counts.",
      dateLocation: "📅 August 28, 2025 | 📍 Dhaka, Bangladesh",
      image: `${donationDriveImg}`,
    },
    {
      id: 2,
      title: "Volunteer Meet-Up 2025",
      subtitle: "Connect • Collaborate • Contribute",
      details:
        "This meet-up brings together volunteers from across the region to share stories, celebrate impact, and build strong community bonds. Includes team activities, workshops, and networking opportunities.",
      dateLocation: "📅 July 25, 2025 | 📍 Faridpur, Bangladesh",
      image: `${metupImg}`,
    },
    {
      id: 3,
      title: "Green Dhaka Campaign",
      subtitle: "Join hands to plant trees and build a greener city.",
      details:
        "This community-driven campaign focuses on planting 1,000 trees across parks and schools in Dhaka. Volunteers will receive guidance, saplings, and eco-friendly kits. Let's build a sustainable future together!",
      dateLocation: "📅 August 07, 2025 | 📍 Dhaka, Bangladesh",
      image: `${greenDhakaImg}`,
    },
    {
      id: 4,
      title: "Volunteer Impact Awards 2025",
      subtitle: "Recognizing dedication, inspiring change.",
      details:
        "A formal evening ceremony honoring outstanding volunteers who have significantly contributed to social development. Includes keynote speakers, performances, and recognition awards for excellence in service.",
      dateLocation: "📅 September 20, 2025 | 📍 Chattogram, Bangladesh",
      image: `${awardEventImg}`,
    },
    {
      id: 5,
      title: "Skills for Change Workshop",
      subtitle: "Empowering youth through practical learning.",
      details:
        "A full-day workshop offering free training on essential life and tech skills like resume writing, basic coding, public speaking, and social leadership. Open to students and fresh graduates.",
      dateLocation: "📅 October 05, 2025 | 📍 Rajshahi, Bangladesh",
      image: `${skillsWorkshopImg}`,
    },
  ]);

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "hidden",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          768: {
            navigation: true,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[75vh] sm:h-[85vh] md:h-[90vh] bg-cover bg-center  text-center "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/60 dark:bg-gray-900/60 p-6 sm:p-8 md:p-10  text-white w-full h-full flex items-center lg:items-start justify-center flex-col">
                <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-md md:text-lg lg:text-2xl mb-9">
                  {slide.subtitle}
                </p>
                <p className="text-sm lg:w-[50%] lg:text-start sm:text-md md:text-lg mb-9 font-light">
                  {slide?.details}
                </p>
                <p className="text-sm lg:w-[50%] lg:text-start sm:text-md md:text-lg mb-6">
                  {slide?.dateLocation}
                </p>
                <button className="bg-[#0D9488] hover:bg-green-600 transition px-5 py-2 rounded">
                  👉 Join Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
