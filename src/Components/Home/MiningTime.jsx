import React from "react";

const MiningTime = () => {
  return (
    <div className="max-w-fit mx-auto mt-3 mb-4">
      <button className="bg-gradient-to-b from-button-bg-hover to-button-bg text-white font-semibold py-2 px-6 rounded-lg shadow text-center">
        <p>Mining is Running</p>
        <p className="text-lg font-bold">16:24:05</p>
      </button>
    </div>
  );
};

export default MiningTime;
