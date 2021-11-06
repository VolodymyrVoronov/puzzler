import { FC, useEffect } from "react";
import { useNavigate } from "react-router";

import { useStore } from "../../store/puzzler";

import Paths from "./../../const/paths";

import GameCard from "./../GameCard/GameCard";

import { GameCardsContainer } from "./GameCards.styled";

const GameCards: FC = () => {
  const navigate = useNavigate();

  const { puzzleCards } = useStore();

  useEffect(() => {
    if (puzzleCards.length === 0) {
      navigate(Paths.Start);
    }
  }, []);

  console.log(puzzleCards);

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
          />
        );
      })}
    </GameCardsContainer>
  );
};

export default GameCards;
