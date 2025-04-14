import { useEffect, useState } from "react";
import "./Boost.css";

const Boost = () => {
  const stages = [
    { stage: "Stage 1", percentage: "10%", amount: "$250/$500" },
    { stage: "Stage 2", percentage: "20%", amount: "$250/$2500" },
    { stage: "Stage 3", percentage: "30%", amount: "$250/$5000" },
    { stage: "Stage 4", percentage: "40%", amount: "$250/$10000" },
  ];

  const [currentStage, setCurrentStage] = useState(0);
  const [showStemDot, setShowStemDot] = useState(false);
  const [hideArmDots, setHideArmDots] = useState(false);

  useEffect(() => {
    const mergeTime = 2000;

    const mergeTimeout = setTimeout(() => {
      setHideArmDots(true);
      setShowStemDot(true);
    }, mergeTime); // after arm animation completes

    const stageInterval = setInterval(() => {
      setCurrentStage((prev) => {
        if (showStemDot && prev < stages.length) return prev + 1;
        return prev;
      });
    }, 900);

    return () => {
      clearTimeout(mergeTimeout);
      clearInterval(stageInterval);
    };
  }, [showStemDot, stages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00323d] to-[#140B27] flex items-center justify-center p-4">
      <div className="relative w-64 h-[500px] flex items-center justify-center">
        {/* Left Arm */}
        <div
          className={`absolute top-0 left-1/2 w-8 h-40 origin-bottom-left rotate-[-45deg] rounded-full transition-colors duration-1000 ${
            hideArmDots ? "bg-teal-800" : "bg-[#CFCFCF]"
          }`}
        ></div>
        {/* Right Arm */}
        <div
          className={`absolute top-0 right-1/2 w-8 h-40 origin-bottom-right rotate-[45deg] rounded-full transition-colors duration-1000 ${
            hideArmDots ? "bg-teal-800" : "bg-[#CFCFCF]"
          }`}
        />
        {/* Stem */}
        <div
          className={`absolute top-36 w-8 h-[70%] rounded-full z-10 transition-colors duration-1000 ${
            currentStage > 0 ? "bg-teal-800" : "bg-[#CFCFCF]"
          }`}
        />

        {/* Stage Labels */}
        <div className="absolute top-40 h-[70%] left-1/2 transform -translate-x-[47%] -translate-y-[30px] w-full text-white z-20">
          <div className="flex flex-col h-full justify-between items-center gap-6 mt-2">
            {stages.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <p className="text-xs w-20 text-right">{item.stage}</p>
                <div
                  className={`size-8 rounded-full flex items-center justify-center font-bold shadow-md transition-all duration-300 ${
                    index < currentStage
                      ? "bg-[#FFEAA3] text-black"
                      : "bg-white text-black"
                  }`}
                >
                  <p>{item.percentage}</p>
                </div>
                <p className="text-xs w-24 text-left">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Balls on arms */}
        {!hideArmDots && <div className="absolute ball-left z-30" />}
        {!hideArmDots && <div className="absolute ball-right z-30" />}

        {/* Stem animation ball */}
        {showStemDot && (
          <div
            className={`absolute dot-animation stage-${currentStage} z-30`}
          />
        )}
      </div>
    </div>
  );
};

export default Boost;
