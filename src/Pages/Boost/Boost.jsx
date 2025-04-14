import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import { useEffect, useState } from "react";

const Boost = () => {
  const y = useMotionValue(25);

  // Smooth the motion value
  const smoothY = useSpring(y, { stiffness: 100, damping: 15 });

  // Background color transition from blue to dark as y increases
  const bgColor = useTransform(
    smoothY,
    [0, 120], // from top to joint
    ["#00323d", "#140B27"]
  );
  const stages = [
    { stage: "Stage 1", percentage: "10%", amount: "$250/$500" },
    { stage: "Stage 2", percentage: "20%", amount: "$250/$2500" },
    { stage: "Stage 3", percentage: "30%", amount: "$250/$5000" },
    { stage: "Stage 4", percentage: "40%", amount: "$250/$10000" },
  ];

  return (
    <motion.div className="min-h-screen bg-gradient-to-b from-first to-second flex items-center justify-center p-4">
      <div className="relative w-64 h-[500px] flex items-center justify-center">
        {/* Left Arm of Y */}
        <motion.div className="absolute transition-colors duration-1000 top-0 left-1/2 w-8 h-40 bg-gray-300 origin-bottom-left rotate-[-45deg] rounded-full" />

        {/* Right Arm of Y */}
        <div className="absolute top-0 right-1/2 w-8 h-40 bg-gray-300 origin-bottom-right rotate-[45deg] rounded-full" />

        {/* Stem of Y */}
        <div className="absolute top-35  rounded-t-none w-8 h-[70%] bg-gray-300 rounded-full z-10" />

        {/* Stage Items */}
        <div className="absolute top-40 h-[70%] left-1/2 transform -translate-x-[47%] -translate-y-[30px] w-full text-white z-20">
          <div className="flex flex-col h-full justify-between items-center gap-6 mt-2">
            {stages.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Left: Stage */}
                <p className="text-xs w-20 text-right">{item.stage}</p>

                {/* Middle: Percentage in a circle */}
                <div className="size-8 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-md">
                  <p>{item.percentage}</p>
                </div>

                {/* Right: Amount */}
                <p className="text-xs w-24 text-left">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 size-8 bg-pink-300 rounded-full z-20"
          style={{ x: useTransform(y, [10, 110], [-100, 0]), y }}
          animate={{ y: 120 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Joint Center Dot */}
        {/* <div className="absolute top-40 w-4 h-4 bg-white rounded-full z-30" /> */}
      </div>
    </motion.div>
  );
};

export default Boost;
