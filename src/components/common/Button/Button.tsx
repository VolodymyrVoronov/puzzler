import { FC } from "react";
import ReactDOM from "react-dom";

import { ButtonContainer } from "./Button.styled";

interface ButtonProps {
  position: "tl" | "tr";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  position,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const portalContainer = document.getElementById("button-root") as HTMLElement;

  return ReactDOM.createPortal(
    <ButtonContainer
      type="button"
      position={position}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ButtonContainer>,
    portalContainer
  );
};

export default Button;
