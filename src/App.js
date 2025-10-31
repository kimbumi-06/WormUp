
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from "../src/page/startpage/startpage.js";
import SoloPage from "../src/page/solopage/solopage.js";
import GamePage from "../src/page/gamepage/gamepage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/solo" element={<SoloPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
