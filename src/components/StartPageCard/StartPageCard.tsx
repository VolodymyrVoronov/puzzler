import { FC } from "react";

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
  return (
    <StartPageCardContainer
      bgSrc={cardImageSrc}
      role="image"
      aria-label={cardImageAlt}
      tabIndex={0}
    />
  );
};

export default StartPageCard;
