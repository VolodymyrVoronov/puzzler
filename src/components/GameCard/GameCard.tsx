import { FC } from "react";

import { GameCardContainer } from "./GameCard.styled";

interface GameCardProps {
  id: string;
  number: number;
  bgPositionX: number;
  bgPositionY: number;
  bgAsset: number;
  onCardClick: (cardId: string) => void;
  activeCard: string;
  isGameEnd: boolean;
}

const GameCard: FC<GameCardProps> = ({
  id,
  bgPositionX,
  bgPositionY,
  bgAsset,
  onCardClick,
  activeCard,
  isGameEnd,
}) => {
  return (
    <GameCardContainer
      role="button"
      aria-label="puzzle card"
      tabIndex={0}
      bgAsset={require(`../../assets/${bgAsset}.jpg`).default}
      bgPositionX={bgPositionX}
      bgPositionY={bgPositionY}
      onClick={() => onCardClick(id)}
      isActive={id === activeCard}
      isGameEnd={isGameEnd}
    />
  );
};

export default GameCard;
