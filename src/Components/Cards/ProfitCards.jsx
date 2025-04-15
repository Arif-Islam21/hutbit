const ProfitCards = ({ profit }) => {
  return (
    <div className="card card-md shadow-md shadow-fourth">
      <div className="card-body">
        <h2 className="text-xl font-semibold text-center">{profit.title}</h2>
        <h4 className="border border-white text-center py-1 mt-3 font-semibold text-[#6CF351]">
          {profit.amount}
        </h4>
        <h3 className="text-center text-lg font-semibold ">{profit.time} </h3>
        <div className="justify-center card-actions">
          <button className="py-2 bg-ninth px-6 my-3 rounded-xl text-white font-bold">
            {profit.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfitCards;
