import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 
                   text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
