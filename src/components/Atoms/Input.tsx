import styled from "styled-components";

export interface InputProp {
  type: string;
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer = styled.input`
  font-size: 18px;
  padding: 0px 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

function Input({ type, inputValue, onChange }: InputProp) {
  return <InputContainer type={type} value={inputValue} onChange={onChange} />;
}

export default Input;
