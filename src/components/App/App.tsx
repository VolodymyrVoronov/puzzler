import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import StartPage from "../../pages/StartPage/StartPage";

import GamePage from "./../../pages/GamePage/GamePage";

import Paths from "../../const/paths";

const App: FC = () => {
  return (
    <Routes>
      <Route path={Paths.Root} element={<Navigate to={Paths.Start} />} />
      <Route path={Paths.Start} element={<StartPage />} />
      <Route path={Paths.Game} element={<GamePage />} />
    </Routes>
  );
};

export default App;
