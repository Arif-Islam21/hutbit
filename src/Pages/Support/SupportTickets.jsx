import { FaArrowRight } from "react-icons/fa";

const SupportTickets = () => {
  const pendingTicket = [
    {
      id: 1,
      ticketId: "08657",
      status: "Pending",
    },
    {
      id: 2,
      ticketId: "08658",
      status: "Pending",
    },
    {
      id: 3,
      ticketId: "08659",
      status: "Pending",
    },
    {
      id: 4,
      ticketId: "08660",
      status: "Pending",
    },
    {
      id: 5,
      ticketId: "08661",
      status: "Pending",
    },
  ];
  const closedTickets = [
    {
      id: 1,
      ticketId: "08657",
      status: "Closed",
    },
    {
      id: 2,
      ticketId: "08658",
      status: "Closed",
    },
    {
      id: 3,
      ticketId: "08659",
      status: "Closed",
    },
    {
      id: 4,
      ticketId: "08660",
      status: "Closed",
    },
    {
      id: 5,
      ticketId: "08661",
      status: "Closed",
    },
  ];
  return (
    <div className="p-6">
      <div className="border-b-2 border-gray-300 mb-4">
        <h2 className="text-2xl text-start font-semibold">Pending...</h2>
        <div className="my-4 flex flex-col gap-3">
          {pendingTicket.map((ticket) => (
            <div
              key={ticket.id}
              className="flex justify-between items-center p-3 border border-white rounded-lg"
            >
              <h4>Ticket {ticket.ticketId}</h4>
              <FaArrowRight className="text-2xl cursor-pointer text-start" />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl text-start font-semibold">Closed</h2>
        <div className="my-4 flex flex-col gap-3">
          {closedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex justify-between items-center p-3 border border-white rounded-lg"
            >
              <h4>Ticket {ticket.ticketId}</h4>
              <FaArrowRight className="text-2xl cursor-pointer text-start" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportTickets;
