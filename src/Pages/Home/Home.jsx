import BottomNav from "../../Components/Home/BottomNav";
import Coins from "../../Components/Home/Coins";
import MiningTime from "../../Components/Home/MiningTime";
import UserProfile from "../../Components/Home/UserProfile";
import image from "../../assets/pictures/homePic.png";

const Home = () => {
  return (
    <div>
      <UserProfile />
      <Coins />
      <div>
        <img src={image} alt="Home" className="px-3" />
      </div>
      <MiningTime />
      <BottomNav />
    </div>
  );
};

export default Home;
