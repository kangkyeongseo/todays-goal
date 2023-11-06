import styled from "styled-components";

interface EditButtonProp {
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonContainer = styled.button`
  width: 35px;
  border: none;
  background-color: initial;
  &:enabled:hover {
    svg {
      color: #116fb8;
    }
  }
`;

function EditButton({ onClick, disabled }: EditButtonProp) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
    </ButtonContainer>
  );
}

export default EditButton;
