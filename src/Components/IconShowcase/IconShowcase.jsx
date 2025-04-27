const IconShowcase = ({ icon }) => {
  return (
    <div>
      <div className="w-16 h-16 flex items-center justify-center custom-shadow-inner">
        <img src={icon} alt="icon" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default IconShowcase;
