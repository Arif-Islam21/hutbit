// components/MiningSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination } from "swiper/modules";
import usdc from "./../../assets/pictures/services/usdc.png";
import { useState } from "react";
import RentModal from "../../Components/Modals/RentModal";
import RedeemModal from "../../Components/Modals/RedeemModal";
import CumulativeRedeemModal from "../../Components/Modals/CumulativeRedeemModal";

export default function MiningSlider() {
  const [isOpen, setIsOpen] = useState(false);
  const [redemmModalOpen, setRedemmModalOpen] = useState(false);
  const [cummulativeModalOpen, setCummulativeModalOpen] = useState(false);

  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-[320px] rounded-lg mining-swiper "
    >
      {/* SLIDER 1 */}
      <SwiperSlide>
        <div className="bg-[#0A2F4D] text-white p-4 rounded-lg border border-blue-500 shadow-lg text-center space-y-3">
          <p className="text-sm font-semibold text-left">Renting Value</p>
          <div className="flex items-center justify-start gap-2 text-2xl font-bold">
            <img src={usdc} alt="USDT" className="w-6 h-6" />
            3405.29 USDT
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
      {/* SLIDER 2 */}
      <SwiperSlide>
        <div className="bg-[#0A2F4D] text-white p-4 rounded-lg border border-blue-500 shadow-lg text-center space-y-3">
          <p className="text-sm font-semibold text-left">Mining Profit</p>
          <div className="flex items-center justify-start gap-2 text-2xl font-bold">
            <img src={usdc} alt="USDT" className="w-6 h-6" />
            3405.29 USDT
          </div>
          <div className="flex justify-around gap-3 pt-2">
            <button
              onClick={() => setRedemmModalOpen(true)}
              className="px-4 py-1 btn-outline bg-transparent text-sm rounded border-2 border-seventh transition cursor-pointer"
            >
              Wallet Adress
            </button>
            <button
              onClick={() => setRedemmModalOpen(true)}
              className="px-4 py-1 bg-blue-500 text-sm rounded hover:bg-blue-600 transition cursor-pointer"
            >
              Redeem Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* SLIDER 3 */}
      <SwiperSlide>
        <div className="bg-[#0A2F4D] text-white p-4 rounded-lg border border-blue-500 shadow-lg text-center space-y-3">
          <p className="text-sm font-semibold text-left">Cumulative Profit</p>
          <div className="flex items-center justify-start gap-2 text-2xl font-bold">
            <img src={usdc} alt="USDT" className="w-6 h-6" />
            3405.29 USDT
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setCummulativeModalOpen(true)}
              className="px-4 py-1 btn-outline bg-transparent text-sm rounded border-2 border-seventh transition cursor-pointer"
            >
              Wallet Adress
            </button>
            <button
              onClick={() => setCummulativeModalOpen(true)}
              className="px-4 py-1 bg-blue-500 text-sm rounded hover:bg-blue-600 transition cursor-pointer"
            >
              Redeem Now
            </button>
          </div>
        </div>
      </SwiperSlide>

      <RentModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <RedeemModal isOpen={redemmModalOpen} setIsOpen={setRedemmModalOpen} />
      <CumulativeRedeemModal
        isOpen={cummulativeModalOpen}
        setIsOpen={setCummulativeModalOpen}
      />
    </Swiper>
  );
}
