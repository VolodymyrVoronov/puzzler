import { PuzzleCard } from "../store/puzzler";

export const getShuffledArray = (arr: PuzzleCard[]) => {
  const newArray = arr.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[rand]] = [newArray[rand], newArray[i]];
  }
  return newArray;
};
