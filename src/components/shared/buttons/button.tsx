import React from 'react';

type ButtonProps = {
  title: string;
  color: 'red' | 'blue' | 'green'; // Limitar los colores válidos.
};

const Button: React.FC<ButtonProps> = ({ title, color }) => {
  const baseClasses =
    "px-4 py-2 rounded-xl font-semibold text-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const colorClasses: Record<string, string> = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };

  return (
    <div className={`${baseClasses} ${colorClasses[color]}`} role="button">
      {title}
    </div>
  );
};

export default Button;
