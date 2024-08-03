import Car from "./Car";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

export default function App() {
  return (
    <>
      <Car />
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        {/* {showedTeams.map((item) => (
          <SwiperSlide key={item.id}>
            <button
              className={`btn btn-ghost p-0 m-0 px-1 ${
                select == item.id && "bg-white bg-opacity-50 backdrop-blur-md"
              }`}
              value={item.id}
              onClick={() => {
                setSelect(item.id);
              }}
            >
              <img src={item.img} alt={item.name} className="w-12 h-10" />
            </button>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </>
  );
}
