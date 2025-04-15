import ProfitCards from "../../Components/Cards/ProfitCards";
import ProfitAvater from "./ProfitAvater";

const Profit = () => {
  const profitData = [
    {
      id: 1,
      title: "Mining Profit",
      amount: "$758.75",
      time: "$91-130/Day",
      btnText: "Reddem Now",
    },
    {
      id: 2,
      title: "Boost",
      amount: "10%",
      time: "Next Stage",
      btnText: "🠪",
    },
    {
      id: 3,
      title: "Affiliate Profit",
      amount: "$758.75",
      time: "$95/Day",
      btnText: "Claim Now",
    },
    {
      id: 4,
      title: "Business Profit",
      amount: "$758.75",
      time: "$100+ $25/Day",
      btnText: "Claim Now",
    },
  ];
  return (
    <div>
      <ProfitAvater />
      <div className="grid grid-cols-2 gap-8  mx-4 mt-8 pb-12">
        {profitData.map((profit) => (
          <ProfitCards key={profit.id} profit={profit} />
        ))}
      </div>
    </div>
  );
};

export default Profit;
