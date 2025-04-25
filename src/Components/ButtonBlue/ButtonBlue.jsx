import "./ButtonBlue.css";
const ButtonBlue = ({ children }) => {
  return (
    <button className="btn btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-blue-800 text-white border-blue-800  button-blue-custom">
      {children}
    </button>
  );
};

export default ButtonBlue;
