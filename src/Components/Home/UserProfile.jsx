const UserProfile = () => {
  return (
    <div className="px-12 py-4 flex items-center gap-4">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h2>Name</h2>
        <h4>Title</h4>
      </div>
    </div>
  );
};

export default UserProfile;
