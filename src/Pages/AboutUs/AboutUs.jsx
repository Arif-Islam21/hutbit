import ServicesCard from "../../Components/Cards/ServicesCard";
import bit from "../../assets/pictures/services/bit.png";
import usdc from "../../assets/pictures/services/usdc.png";
import doge from "../../assets/pictures/services/doge.png";
import bank from "../../assets/pictures/services/bank.png";

const AboutUs = () => {
  const cardData = [
    {
      id: 1,
      title: "Mining Farm Setup",
      description:
        "We build and manage top-tier crypto mining farms using powerful ASIC hardware. Our infrastructure ensures maximum efficiency, uptime, and output.",
    },
    {
      id: 2,
      title: "Hassle-Free Equipment Rental",
      description:
        "No problem. Rent mining hardware through our platform and start earning crypto without setting up a thing.",
    },
    {
      id: 3,
      title: "Passive Crypto Income",
      description:
        "We mine popular coins like Bitcoin, Dogecoin, and Kaspa on your behalf. You earn daily rewards directly in your wallet based on your rental package.",
    },
    {
      id: 4,
      title: "Transparent Profit Sharing",
      description:
        "All mining profits are shared with clients in real-time. You get full transparency, trackable earnings, and a clear view of your returns.",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-b from-first to-second px-4">
      <h2 className="text-3xl font-semibold text-center text-white mb-6 mt-4">
        Services
      </h2>
      <div className="w-full flex flex-col mb-8 gap-12 items-center justify-center max-w-sm p-6 bg-transparent rounded-lg">
        {cardData.map((card) => (
          <ServicesCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-12 items-center justify-center max-w-sm p-6 bg-transparent rounded-lg py-12">
        <div className="flex items-center relative w-full ">
          <img src={bit} alt="Bit" className="size-28 absolute left-2/3" />
        </div>
        <div className="flex items-center relative w-full ">
          <img src={usdc} alt="USDC" className="size-26" />
        </div>
        <div className="flex items-center relative w-full ">
          <img src={doge} alt="Doge" className="size-24 absolute right-1/4" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-12 items-center justify-center max-w-sm p-6 bg-transparent rounded-lg py-12">
        <div>
          <h2 className="text-3xl font-bold text-center">ASIC</h2>
          <p className="textarea-md font-thin text-center">Mining</p>
        </div>
        <p className=" text-white">
          ASIC mining refers to the use of Application-Specific Integrated
          Circuit devices that are built solely for mining cryptocurrencies.
          Unlike general-purpose hardware like CPUs or GPUs, ASICs are designed
          to mine specific algorithms such as SHA-256 for Bitcoin or KHeavyHash
          for Kaspa. These machines are highly efficient, offering faster
          processing and lower energy consumption, making them ideal for
          large-scale mining operations. While they provide higher profitability
          and are easier to scale, ASICs are costly, lack flexibility, and
          contribute to mining centralization. They're commonly used for mining
          coins like Bitcoin, Dogecoin, and Kaspa.
        </p>
        <div>
          <img src={bank} alt="bank photo" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
