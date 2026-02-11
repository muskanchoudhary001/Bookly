import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        w-12 h-12
  flex items-center justify-center
  rounded-full
  bg-blue-500
  text-white
  shadow-md
  hover:bg-blue-600
  hover:shadow-lg
  transition-all duration-300
      "
    >
      <BsArrowLeft className="text-3xl " />
    </button>
  );
};

export default BackButton;
