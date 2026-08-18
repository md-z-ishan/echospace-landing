import React from 'react';

export const Card = ({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl border border-slate-200/90 p-5 
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-slate-300' : ''} 
        ${glow ? 'shadow-glow-violet border-violet-300/50' : 'shadow-sm'}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
