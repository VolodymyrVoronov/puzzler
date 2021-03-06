import { FC, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useStore } from "../../store/puzzler";

import Paths from "./../../const/paths";

import GameCard from "./../GameCard/GameCard";

import { GameCardsContainer } from "./GameCards.styled";

const GameCards: FC = () => {
  const navigate = useNavigate();

  const {
    puzzleCards,
    setIndexOfChosenCard,
    setIndexOfCardToReplace,
    indexOfChosenCard,
    swapCards,
    checkEndGame,
    isGameEnd,
  } = useStore();

  const [activeCard, setActiveCard] = useState<string>("");

  useEffect(() => {
    if (puzzleCards.length === 0) {
      navigate(Paths.Start, { replace: true });
    }
  }, []);

  const onCardClick = (cardId: string) => {
    setActiveCard(cardId);

    if (indexOfChosenCard === undefined) {
      setIndexOfChosenCard(cardId);
    } else {
      setIndexOfCardToReplace(cardId);
      swapCards();
      setActiveCard("");
      checkEndGame();
    }
  };

  return (
    <GameCardsContainer>
      {puzzleCards.map((puzzleCard) => {
        const { id, number, bgPositionX, bgPositionY, bgAsset } = puzzleCard;

        return (
          <GameCard
            key={id}
            id={id}
            number={number}
            bgPositionX={bgPositionX}
            bgPositionY={bgPositionY}
            bgAsset={bgAsset}
            onCardClick={onCardClick}
            activeCard={activeCard}
            isGameEnd={isGameEnd}
          />
        );
      })}
    </GameCardsContainer>
  );
};

export default memo(GameCards);
