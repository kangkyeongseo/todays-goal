import styled from "styled-components";

interface CheckButtonProp {
  isChecked: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonContainer = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-radius: 5px;
  background-color: #fff;
`;

function CheckButton({ isChecked, onClick, disabled }: CheckButtonProp) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      )}
    </ButtonContainer>
  );
}

export default CheckButton;
