export interface InputProp {
  type: string;
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, inputValue, onChange }: InputProp) {
  return <input type={type} value={inputValue} onChange={onChange} />;
}

export default Input;
