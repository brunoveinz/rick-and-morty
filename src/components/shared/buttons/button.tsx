import React from 'react';

type ButtonProps = {
  title: string;
  color: string;
};

const Button: React.FC<ButtonProps> = ({ title, color }) => {
  const baseClasses = "px-4 py-2 rounded-xl font-semibold text-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  return (
    <button 
      className={`${baseClasses} bg-${color}-500 hover:bg-${color}-600 focus:ring-${color}-500`}
      role="button"
    >
      {title}
    </button>
  );
};

export default Button;