import { useState } from "react";

const GroupButtons = ({ onClick }) => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
    if (onClick) onClick(); // call parent handler if provided
  };
  return (
    <button
      onClick={handleToggle}
      className={`w-14 h-8 rounded-full flex items-center px-1 transition-all duration-300 ${
        isOn ? "bg-blue-500 justify-end" : "bg-gray-300 justify-start"
      }`}
    >
      <div className="w-6 h-6 bg-white rounded-full shadow-md" />
    </button>
  );
};

export default GroupButtons;
