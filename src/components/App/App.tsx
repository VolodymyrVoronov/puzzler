import { Routes, Route } from "react-router-dom";

import StartPage from "../../pages/StartPage";

import Paths from "../../const/paths";

const App = () => {
  return (
    <Routes>
      <Route path={Paths.Start} element={<StartPage />} />
      <Route path={Paths.Game} element={<div>game</div>} />
    </Routes>
  );
};

export default App;
