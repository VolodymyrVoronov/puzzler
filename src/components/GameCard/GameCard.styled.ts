import styled from "styled-components";

interface GameCardContainerProps {
  bgAsset: string;
  bgPositionX: number;
  bgPositionY: number;
}

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
`;

export { GameCardContainer };
