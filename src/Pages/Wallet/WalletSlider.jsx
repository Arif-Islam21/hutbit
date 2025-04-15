// components/MiningSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination } from "swiper/modules";
import usdc from "./../../assets/pictures/services/usdc.png";
import { useState } from "react";
import RentModal from "../../Components/Modals/RentModal";

export default function MiningSlider() {
  const profitData = [
    { id: 1, profit: "3405.29 USDT" },
    { id: 2, profit: "2800.10 USDT" },
    { id: 3, profit: "1500.00 USDT" },
  ];

  let [isOpen, setIsOpen] = useState(false);

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-[320px] rounded-lg mining-swiper "
    >
      {profitData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="bg-[#0A2F4D] text-white p-4 rounded-lg border border-blue-500 shadow-lg text-center space-y-3">
            <p className="text-sm font-semibold text-left">Renting Value</p>
            <div className="flex items-center justify-start gap-2 text-2xl font-bold">
              <img src={usdc} alt="USDT" className="w-6 h-6" />
              {item.profit}
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-1 bg-blue-500 text-sm rounded hover:bg-blue-600 transition cursor-pointer"
              >
                Rent Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <RentModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </Swiper>
  );
}
