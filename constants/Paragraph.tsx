import React, { ReactNode } from "react";


interface IProps {
  children: ReactNode;
  className?: string;
}

const Paragraph = ({ children, className, ...otherProps }: IProps) => {
  return (
    <p className={`m-0 text-sm opacity-20 text-[16px] ${className}`} {...otherProps}>
      {children}
    </p>
  );
};

export default Paragraph;
