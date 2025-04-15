import ProfitCards from "../../Components/Cards/ProfitCards";
import ProfitAvater from "./ProfitAvater";

const Profit = () => {
  return (
    <div>
      <ProfitAvater />
      <div className="grid grid-cols-2 gap-8  mx-4 mt-8 pb-12">
        <ProfitCards />
        <ProfitCards />
        <ProfitCards />
        <ProfitCards />
      </div>
    </div>
  );
};

export default Profit;
