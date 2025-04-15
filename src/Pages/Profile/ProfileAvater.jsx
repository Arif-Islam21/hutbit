import avater from "../../assets/pictures/profile.jpg";
import india from "../../assets/pictures/india.png";

const ProfileAvater = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center flex-col">
        <div className="avatar">
          <div className="w-18 rounded-full">
            <img src={avater} alt="Profile Avatar" />
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center mt-3">
          <img src={india} alt="India" className="size-4" />
          <h2 className="text-2xl font-semibold">John John</h2>
        </div>
        <p className="text-sm my-1 text-center">johnjohn@gmail.com</p>
        <button className="btn rounded-lg bg-ninth text-white font-bold border-none shadow-none mt-2">
          GHM
        </button>
      </div>
    </div>
  );
};

export default ProfileAvater;
