import styled, { keyframes, css } from "styled-components";

interface GameCardContainerProps {
  bgAsset: string;
  bgPositionX: number;
  bgPositionY: number;
  isActive: boolean;
  isGameEnd: boolean;
}

const activeCardAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const GameCardContainer = styled.div<GameCardContainerProps>`
  display: block;

  width: 100px;
  height: 100px;

  margin: 0.5px;

  background-image: url(${(props) => props.bgAsset});
  background-position-x: -${(props) => props.bgPositionX}px;
  background-position-y: -${(props) => props.bgPositionY}px;
  background-size: 1200%;

  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      animation: ${activeCardAnimation} 2s infinite;
      pointer-events: none;
    `}

  ${(props) =>
    props.isGameEnd &&
    css`
      pointer-events: none;
    `}
`;

export { GameCardContainer };
