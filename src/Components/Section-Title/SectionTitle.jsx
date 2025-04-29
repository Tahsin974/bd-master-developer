const SectionTitle = ({ heading, subheading, children }) => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row justify-between lg:items-center xl:items-center items-start gap-4 lg:text-left xl:text-left text-justify">
      {/* heading and subheading */}
      <div className="lg:w-[45%] md:w-[45%] ">
        <h5 className=" xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg font-semibold ruluko-bold text-[#00626F] uppercase">
          {subheading}
        </h5>
        <h1 className="xl:text-4xl/snug lg:text-4xl/snug md:text-4xl/snug sm:text-4xl/snug text-2xl/snug inter-bold  capitalize">
          {heading}
        </h1>
      </div>
      {/* Description */}
      <div className="lg:w-[38%] ">{children}</div>
    </div>
  );
};

export default SectionTitle;
