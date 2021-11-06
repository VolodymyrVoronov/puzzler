import { FC } from "react";

import { GameCardContainer } from "./GameCard.styled";

interface GameCardProps {
  id: string;
  number: number;
  bgPositionX: number;
  bgPositionY: number;
  bgAsset: number;
}

const GameCard: FC<GameCardProps> = ({
  id,
  number,
  bgPositionX,
  bgPositionY,
  bgAsset,
}) => {
  return (
    <GameCardContainer
      bgAsset={require(`../../assets/${bgAsset}.jpg`).default}
      bgPositionX={bgPositionX}
      bgPositionY={bgPositionY}
    />
  );
};

export default GameCard;
