const ServicesCard = ({ title, description }) => {
  return (
    <div className="card bg-first shadow-lg shadow-ninth">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-center mb-3">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
