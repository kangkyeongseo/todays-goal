export interface ButtonProp {
  buttonValue: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ buttonValue, onClick, disabled = false }: ButtonProp) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {buttonValue}
    </button>
  );
}

export default Button;
