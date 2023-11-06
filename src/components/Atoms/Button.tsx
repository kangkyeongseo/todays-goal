import styled from "styled-components";

export interface ButtonProp {
  buttonValue: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonContainer = styled.button`
  color: white;
  background-color: #777;
  border: none;
  &:hover {
    background-color: #666;
  }
`;

function Button({ buttonValue, onClick, disabled = false }: ButtonProp) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {buttonValue}
    </ButtonContainer>
  );
}

export default Button;
