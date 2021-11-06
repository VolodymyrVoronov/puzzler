import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import StartPage from "../../pages/StartPage/StartPage";

import GamePage from "./../../pages/GamePage/GamePage";

import Paths from "../../const/paths";

const App: FC = () => {
  return (
    <Routes>
      <Route path={Paths.Start} element={<StartPage />} />
      <Route path={Paths.Game} element={<GamePage />} />
    </Routes>
  );
};

export default App;
