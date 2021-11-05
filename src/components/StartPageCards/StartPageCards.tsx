import { useStore } from "../../store/puzzler";

import StartPageCard from "./../StartPageCard/StartPageCard";

import { StartPageCardsContainer } from "./StartPageCards.styled";

const StartPageCards = () => {
  const { startCards } = useStore();

  return (
    <StartPageCardsContainer>
      {startCards.map((card) => {
        const { id, cardImageSrc, cardImageAlt } = card;

        return (
          <StartPageCard
            key={id}
            id={id}
            cardImageSrc={cardImageSrc}
            cardImageAlt={cardImageAlt}
          />
        );
      })}
    </StartPageCardsContainer>
  );
};

export default StartPageCards;
