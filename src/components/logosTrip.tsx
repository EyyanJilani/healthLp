import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import Slide1 from "../../assets/images/logos/10.png";
import Slide2 from "../../assets/images/logos/1.png";
import Slide3 from "../../assets/images/logos/2.png";
import Slide4 from "../../assets/images/logos/3.png";
import Slide5 from "../../assets/images/logos/4.png";
import Slide6 from "../../assets/images/logos/5.png";
import Slide7 from "../../assets/images/logos/6.png";
import Slide8 from "../../assets/images/logos/7.png";
import Slide9 from "../../assets/images/logos/8.png";
import Slide10 from "../../assets/images/logos/9.png";
// import Slide10 from "../../../../../../public/assets/img/th-4/home-brand-slider-img/home-brand-slide-10.png";

const services = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
];

export default function LogosTrip() {
  return (
    <section className="py-2 bg-[#195F76]">
      <Splide
        options={{
          type: "loop",
          perPage: 10,
          gap: "2rem",
          arrows: false,
          pagination: false,
          drag: false,
          breakpoints: {
            640: {
              perPage: 3,
            },
          },
          autoScroll: {
            speed: 0.8, // Adjust for smoothness
            pauseOnHover: true,
            pauseOnFocus: false,
          },
          easing: "linear",
          clones: 10, // ✅ preload more clones so it doesn’t need to jump often
        }}
        extensions={{ AutoScroll }}
        className="w-full"
      >
        {services.map((item, index) => (
          <SplideSlide key={index}>
            <div>
              <img
                className="w-[117px] h-[69px] object-contain "
                src={item}
                alt=""
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
