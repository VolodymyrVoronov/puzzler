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
}

const GameCard: FC<GameCardProps> = ({
  id,
  number,
  bgPositionX,
  bgPositionY,
  bgAsset,
  onCardClick,
  activeCard,
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
    />
  );
};

export default GameCard;
