import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className, ...otherProps }: IProps) => {
  return (
    <>
      <h2 className={`mb-3 text-3xl font-bold  ${className}`} {...otherProps}>
        {children}{" "}
      </h2>
    </>
  );
};

export default Heading;
