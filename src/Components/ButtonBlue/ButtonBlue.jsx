import "./ButtonBlue.css";
const ButtonBlue = ({ children }) => {
  return (
    <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-lg text-white   button-blue-custom ruluko-bold">
      {children}
    </button>
  );
};

export default ButtonBlue;
