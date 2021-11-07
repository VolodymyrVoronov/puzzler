import { PuzzleCard } from "../store/puzzler";

export const getIndexOfItemInArray = (arr: PuzzleCard[], id: string) => {
  return arr.findIndex((a: PuzzleCard) => a.id === id);
};
