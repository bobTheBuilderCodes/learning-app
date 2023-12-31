import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeading = ({ children, className, ...otherProps }: IProps) => {
  return (
    <h2 className={`mb-1 text-xl  ${className}`} {...otherProps}>
      {children}{" "}
    </h2>
  );
};

export default SubHeading;
