import Transections from "./Transections";
import MiningSlider from "./WalletSlider";

const Wallet = () => {
  return (
    <div>
      <MiningSlider />
      <div className="mt-8">
        <p className="text-sm text-center">Transaction History</p>
        <hr className="my-4" />
        <Transections />
      </div>
    </div>
  );
};

export default Wallet;
