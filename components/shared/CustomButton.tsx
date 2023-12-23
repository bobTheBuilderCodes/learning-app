import { ReactNode } from "react";
import { Button, ButtonProps } from "antd";

interface IProps extends ButtonProps {
  children: ReactNode;
  width?: number;
}
const CustomButton = ({ children, width = 400, ...otherProps }: IProps) => (
  <Button type="primary" size="large" style={{ width }} {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;
