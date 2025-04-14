import image from "../../assets/pictures/profile.jpg";

const UserProfile = () => {
  return (
    <div className="px-12 py-4 flex items-center gap-4">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src={image} />
        </div>
      </div>
      <div>
        <h2>Joh john</h2>
        <h4>ID- 453927</h4>
      </div>
    </div>
  );
};

export default UserProfile;
