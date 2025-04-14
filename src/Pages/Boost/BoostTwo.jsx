import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

const BoostTwo = () => {
  const [phase, setPhase] = useState(0);
  const leftBallY = useMotionValue(0);
  const rightBallY = useMotionValue(0);
  const centerBallY = useMotionValue(0);

  // Spring versions for smoother animation
  const smoothLeftY = useSpring(leftBallY, { stiffness: 200, damping: 20 });
  const smoothRightY = useSpring(rightBallY, { stiffness: 200, damping: 20 });
  const smoothCenterY = useSpring(centerBallY, { stiffness: 200, damping: 20 });

  // X positions to make balls follow the Y shape
  const leftBallX = useTransform(smoothLeftY, [0, 100], [0, 0]);
  const rightBallX = useTransform(smoothRightY, [0, 100], [0, 0]);

  const stages = [
    { stage: "Stage 1", percentage: "10%", amount: "$250/$500" },
    { stage: "Stage 2", percentage: "20%", amount: "$250/$2500" },
    { stage: "Stage 3", percentage: "30%", amount: "$250/$5000" },
    { stage: "Stage 4", percentage: "40%", amount: "$250/$10000" },
  ];

  useEffect(() => {
    const sequence = async () => {
      // Phase 1: Balls come down the arms
      setPhase(1);
      leftBallY.set(100);
      rightBallY.set(100);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Phase 2: Center ball comes down the stem
      setPhase(2);
      centerBallY.set(300);
    };

    sequence();

    return () => {
      // Cleanup
      leftBallY.set(0);
      rightBallY.set(0);
      centerBallY.set(0);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-first to-second flex items-center justify-center p-4">
      <div className="relative w-64 h-[500px] flex items-center justify-center">
        {/* Left Arm of Y */}
        <motion.div className="absolute top-0 left-1/2 w-8 h-40 bg-gray-300 origin-bottom-left rotate-[-45deg] rounded-full" />

        {/* Right Arm of Y */}
        <motion.div className="absolute top-0 right-1/2 w-8 h-40 bg-gray-300 origin-bottom-right rotate-[45deg] rounded-full" />

        {/* Stem of Y */}
        <motion.div className="absolute top-40 rounded-t-none w-8 h-[70%] bg-gray-300 rounded-full z-10" />

        {/* Stage Items */}
        <div className="absolute top-40 h-[70%] left-1/2 transform -translate-x-[47%] -translate-y-[30px] w-full text-white z-20">
          <div className="flex flex-col h-full justify-between items-center gap-6 mt-2">
            {stages.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <p className="text-xs w-20 text-right">{item.stage}</p>
                <div className="size-8 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-md">
                  <p>{item.percentage}</p>
                </div>
                <p className="text-xs w-24 text-left">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Left Ball */}
        <motion.div
          className="absolute top-0 left-1/2 size-8 bg-pink-300 rounded-full z-20 shadow-lg"
          style={{
            y: smoothLeftY,
            x: useTransform(smoothLeftY, [0, 100], [-40, 0]),
          }}
          animate={{
            opacity: phase === 1 ? 1 : 0,
          }}
        />

        {/* Right Ball */}
        <motion.div
          className="absolute top-0 right-1/2 size-8 bg-blue-300 rounded-full z-20 shadow-lg"
          style={{
            y: smoothRightY,
            x: useTransform(smoothRightY, [0, 100], [40, 0]),
          }}
          animate={{
            opacity: phase === 1 ? 1 : 0,
          }}
        />

        {/* Center Ball */}
        <motion.div
          className="absolute top-40 left-1/2 size-8 bg-purple-500 rounded-full z-20 shadow-lg"
          style={{
            y: smoothCenterY,
            x: useTransform(smoothCenterY, [0, 300], [0, 0]),
          }}
          animate={{
            opacity: phase === 2 ? 1 : 0,
          }}
          initial={{ opacity: 0 }}
        />
      </div>
    </div>
  );
};

export default BoostTwo;
