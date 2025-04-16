import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import tik from "../../assets/pictures/services/ticketSuccess.png";

const SupportSuccessModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed bg-gradient-to-b from-first to-second inset-0 flex min-w-screen min-h-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-transparent p-12">
            <DialogTitle
              className="font-bold text-white text-3xl text-center
            "
            >
              Your Ticket has been Submitted Successfully
            </DialogTitle>

            <div className="flex justify-center items-center">
              <img src={tik} alt="ticket success" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default SupportSuccessModal;
