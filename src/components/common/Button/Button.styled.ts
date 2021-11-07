import styled, { css } from "styled-components";

interface ButtonContainerProps {
  position: string;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  position: absolute;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 48px;
  line-height: 48px;
  color: #2c9de3;

  border: none;
  background: transparent;

  cursor: pointer;

  transition: 0.5s ease;

  ${(props) =>
    props.position === "tl" &&
    css`
      top: 15px;
      left: 15px;
    `}

  ${(props) =>
    props.position === "tr" &&
    css`
      top: 15px;
      right: 15px;
    `}

  &:hover {
    transition: 0.5s ease;
    color: lightskyblue;
  }
`;

export { ButtonContainer };
