const MemberCard = ({ member }) => {
  const { name, title, profileImage } = member;
  return (
    <div>
      <div className="card custom-shadow xl:h-[320px] lg:h-[320px] md:h-[320px] h-[300px] xl:w-[240px] lg:w-[240px] md:w-[240px] w-[225px] pb-3 ">
        {/* Team member image and social media links */}
        <figure className="rounded-xl">
          <img
            src={profileImage} // Displaying team member profile image
            alt="profile" // Alt text for accessibility
            className=" h-full w-full scale-105 transition duration-300 ease-in-out hover:scale-125"
          />
        </figure>
        {/* Team member name and title */}
        <div className="card-body p-2 items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-500 xl:text-sm md:text-sm text-xs">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
