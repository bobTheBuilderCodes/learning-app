import React, { ReactNode } from "react";
import { StringDecoder } from "string_decoder";

interface IProps {
  children: ReactNode;
  className?: string;
}

const Paragraph = ({ children, className, ...otherProps }: IProps) => {
  return (
    <p className={`m-0 text-sm opacity-20 ${className}`} {...otherProps}>
      {children}
    </p>
  );
};

export default Paragraph;
