import Main from "../Main/Main";
import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import Fairytale from "../Fairytale/Fairytale";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/for-you" element={<Fairytale />} />
      </Routes>
    </div>
  );
};

export default App;
