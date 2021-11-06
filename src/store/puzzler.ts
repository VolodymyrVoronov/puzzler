import create from "zustand";
import uid from "uid2";

import { getShuffledArr } from "../helpers/getShuffledArr";
import { getPuzzlesGrid } from "../helpers/getPuzzlesGrid";

import startCard01 from "./../assets/1.jpg";
import startCard02 from "./../assets/2.jpg";
import startCard03 from "./../assets/3.jpg";
import startCard04 from "./../assets/4.jpg";
import startCard05 from "./../assets/5.jpg";
import startCard06 from "./../assets/6.jpg";

interface StartCard {
  id: number;
  cardImageSrc: string;
  cardImageAlt: string;
}

export interface PuzzleCard {
  id: string;
  number: number;
  bgPositionX: number;
  bgPositionY: number;
  bgAsset: number;
}

interface PuzzlerStore {
  startCards: StartCard[];
  startGame: (option: number) => void;
  puzzleCards: PuzzleCard[];
}

export const useStore = create<PuzzlerStore>((set, get) => ({
  startCards: [
    { id: 1, cardImageSrc: startCard01, cardImageAlt: "Bridge next to ocean." },
    {
      id: 2,
      cardImageSrc: startCard02,
      cardImageAlt: "House and cars on the street.",
    },
    {
      id: 3,
      cardImageSrc: startCard03,
      cardImageAlt: "Field.",
    },
    {
      id: 4,
      cardImageSrc: startCard04,
      cardImageAlt: "Ancient bridge.",
    },
    { id: 5, cardImageSrc: startCard05, cardImageAlt: "Laguna and ocean." },
    { id: 6, cardImageSrc: startCard06, cardImageAlt: "View on night city." },
  ],

  puzzleCards: [],

  startGame: (option: number) =>
    set((state) => {
      const amountOfPieces = 96;
      let newPuzzleCards = [];

      for (let i = 0; i < amountOfPieces; i++) {
        const puzzleCard = {
          id: uid(10),
          number: i,
          bgPositionX: i * 100,
          bgPositionY: getPuzzlesGrid(i),
          bgAsset: option,
        };

        newPuzzleCards.push(puzzleCard);
      }

      return {
        ...state,
        // puzzleCards: getShuffledArr(newPuzzleCards),
        puzzleCards: newPuzzleCards,
      };
    }),
}));
