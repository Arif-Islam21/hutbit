import avater from "../../assets/pictures/profile.jpg";

const ProfitAvater = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center flex-col">
        <div className="avatar">
          <div className="w-18 rounded-full">
            <img src={avater} alt="Profile Avatar" />
          </div>
        </div>
        <div className="flex items-center flex-col gap-1 justify-center mt-3">
          <h2 className="text-2xl font-semibold">John John</h2>
          <h2 className="text-2xl font-semibold text-center">
            ASIC Miner <span>$1000</span>
          </h2>
        </div>
        <p className="text-sm my-1 text-center">johnjohn@gmail.com</p>
        <button className="btn rounded-lg bg-gradient-to-b from-button-bg-hover px-8 py-6 to-button-bg border border-white shadow-md text-white font-bold mt-4">
          Rent now
        </button>
      </div>
    </div>
  );
};

export default ProfitAvater;
