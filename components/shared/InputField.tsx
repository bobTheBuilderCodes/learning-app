import { Form, FormProps, Input, InputProps } from "antd";

interface IProps extends InputProps {
  label?: string;
  placeholder?: string;
}

const InputField = ({ label = "", placeholder, ...otherProps }: IProps) => {
  return (
    // <Form.Item label={label}>
    <form className="mb-4">
      <label className="text-white mb-4">{label}</label>
      <Input {...otherProps} placeholder={placeholder} size="large" />
    </form>
    // </Form.Item>
  );
};

export default InputField;
