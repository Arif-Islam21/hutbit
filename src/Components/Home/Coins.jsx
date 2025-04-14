import bitCoin from "../../assets/pictures/bitCoin.png";
import tether from "../../assets/pictures/tether.png";
const Coins = () => {
  return (
    <div className="max-w-fit mx-auto flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-7 rounded-full">
            <img src={bitCoin} />
          </div>
        </div>
        <h3 className="text-lg">0.0000437 BTC </h3>
      </div>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="w-7 rounded-full">
            <img src={tether} />
          </div>
        </div>
        <h3 className="text-lg">3405.29 USDT</h3>
      </div>
    </div>
  );
};

export default Coins;
