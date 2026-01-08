import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="w-16 h-16 rounded-full border-4 border-t-blue-400 border-r-transparent border-b-blue-400 border-l-transparent animate-spin shadow-xl shadow-blue-500/50"></div>
    </div>
  );
};

export default Spinner;