import { FC } from "react";
import { useNavigate } from "react-router";

import { useStore } from "./../../store/puzzler";

import Paths from "./../../const/paths";

import { StartPageCardContainer } from "./StartPageCard.styled";

interface StartPageCardProps {
  id: number;
  cardImageSrc: string;
  cardImageAlt: string;
}

const StartPageCard: FC<StartPageCardProps> = ({
  id,
  cardImageSrc,
  cardImageAlt,
}) => {
  const navigate = useNavigate();

  const { startGame } = useStore();

  const onCardClick = () => {
    startGame(id);
    navigate(Paths.Game, { replace: true });
  };

  return (
    <StartPageCardContainer
      bgSrc={cardImageSrc}
      role="button"
      aria-label={cardImageAlt}
      tabIndex={0}
      onClick={() => onCardClick()}
    />
  );
};

export default StartPageCard;
